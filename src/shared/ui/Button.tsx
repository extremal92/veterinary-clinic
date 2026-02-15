"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

/** Props that conflict between React HTML and Framer Motion gesture handlers */
type FramerConflictProp =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, FramerConflictProp>;

function getVariantClasses(variant: ButtonVariant) {
  if (variant === "secondary") {
    return "bg-white text-sky-700 ring-1 ring-inset ring-sky-200 hover:bg-sky-50";
  }

  if (variant === "ghost") {
    return "bg-transparent text-sky-700 hover:bg-sky-50";
  }

  return "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm hover:from-sky-600 hover:to-blue-700";
}

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "tween" as const, duration: 0.15 },
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50";

  const variantClasses = getVariantClasses(variant);
  const merged = `${baseClasses} ${variantClasses} ${className ?? ""}`;

  if (href) {
    return (
      <motion.a href={href} className={merged} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={merged} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
