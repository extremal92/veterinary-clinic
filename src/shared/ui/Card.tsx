import type {ReactNode} from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({children, className}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

