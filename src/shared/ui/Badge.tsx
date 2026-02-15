import type {ReactNode} from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({children, className}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-100 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

