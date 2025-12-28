"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period?: string;
  description?: string;
  className?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  className,
}: Props) {
  return (
    <div className={cn("flex gap-4", className)}>
      {logoUrl && (
        <Avatar className="size-12 shrink-0 border">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-y-1">
        <div className="flex flex-col gap-y-1">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              {title}
            </Link>
          ) : (
            <div className="font-semibold">{title}</div>
          )}
          {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
          {period && <time className="text-xs text-muted-foreground">{period}</time>}
        </div>
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {description && (
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
