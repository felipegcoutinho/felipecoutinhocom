import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: ReactNode;
  external?: boolean;
  ariaLabel?: string;
}

export function ActionButton({
  href,
  children,
  icon,
  external = false,
  className,
  ariaLabel,
  ...rest
}: ActionButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-base font-medium text-black",
        "transition-colors hover:bg-white/90",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}

