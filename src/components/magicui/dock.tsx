"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, {
  PropsWithChildren,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

interface DockContextValue {
  mouseX: MotionValue<number>;
  iconSize: number;
  iconMagnification: number;
  iconDistance: number;
}

const DockContext = createContext<DockContextValue | undefined>(undefined);

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex h-[54px] w-max items-center justify-center gap-2 rounded-full border p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
    const dockRef = useRef<HTMLDivElement>(null);

    return (
      <DockContext.Provider
        value={{ mouseX, iconSize, iconMagnification, iconDistance }}
      >
        <motion.div
          ref={(node) => {
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
            dockRef.current = node;
          }}
          onMouseMove={(e) => {
            if (dockRef.current) {
              const rect = dockRef.current.getBoundingClientRect();
              mouseX.set(e.clientX - rect.left);
            }
          }}
          onMouseLeave={() => mouseX.set(Infinity)}
          {...props}
          className={cn(dockVariants({ className }), {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
          })}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps extends Omit<
  MotionProps & React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

const DockIcon = ({
  size: sizeProp,
  magnification: magnificationProp,
  distance: distanceProp,
  mouseX: mouseXProp,
  className,
  children,
  ...props
}: DockIconProps) => {
  const context = useContext(DockContext);
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = mouseXProp ?? context?.mouseX ?? useMotionValue(Infinity);
  const size = sizeProp ?? context?.iconSize ?? DEFAULT_SIZE;
  const magnification =
    magnificationProp ?? context?.iconMagnification ?? DEFAULT_MAGNIFICATION;
  const distance = distanceProp ?? context?.iconDistance ?? DEFAULT_DISTANCE;

  const padding = Math.max(6, size * 0.2);
  const iconX = useMotionValue(0);

  useEffect(() => {
    const updateIconX = () => {
      if (ref.current && ref.current.parentElement) {
        const iconBounds = ref.current.getBoundingClientRect();
        const dockBounds = ref.current.parentElement.getBoundingClientRect();
        iconX.set(iconBounds.left - dockBounds.left + iconBounds.width / 2);
      }
    };

    updateIconX();

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateIconX);
    });

    if (ref.current?.parentElement) {
      resizeObserver.observe(ref.current.parentElement);
    }
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateIconX);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIconX);
    };
  }, [iconX]);

  // Create a combined motion value that updates when either mouseX or iconX changes
  const distanceValue = useMotionValue(Infinity);

  useEffect(() => {
    const updateDistance = () => {
      const mouse = mouseX.get();
      if (mouse === Infinity) {
        distanceValue.set(Infinity);
        return;
      }
      const iconCenter = iconX.get();
      distanceValue.set(mouse - iconCenter);
    };

    // Subscribe to mouseX changes
    const unsubscribeMouse = mouseX.on("change", updateDistance);
    // Subscribe to iconX changes
    const unsubscribeIcon = iconX.on("change", updateDistance);

    updateDistance(); // Initial calculation

    return () => {
      unsubscribeMouse();
      unsubscribeIcon();
    };
  }, [mouseX, iconX, distanceValue]);

  const sizeTransform = useTransform(distanceValue, (val) => {
    if (val === Infinity) return size;
    const absDistance = Math.abs(val);
    if (absDistance > distance) return size;
    const scale = 1 - absDistance / distance;
    return size + (magnification - size) * scale;
  });

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
