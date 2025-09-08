import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";

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
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      passHref
    >
      <ShimmerButton>
        <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black lg:text-lg">
          {icon}
          {children}
        </span>
      </ShimmerButton>
    </Link>
  );
}
