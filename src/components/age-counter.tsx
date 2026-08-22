"use client";

import { useEffect, useState } from "react";

interface AgeCounterProps {
  birthDate?: string;
}

export function AgeCounter({ birthDate = "2003-05-15" }: AgeCounterProps) {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    const birth = new Date(birthDate).getTime();

    const updateAge = () => {
      const now = Date.now();
      const ageInYears = (now - birth) / (1000 * 60 * 60 * 24 * 365.2425);
      setAge(ageInYears.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight">
      been here for{" "}
      <span className="font-mono text-foreground font-semibold">
        {age || "22.000000000"}
      </span>{" "}
      years
    </p>
  );
}
