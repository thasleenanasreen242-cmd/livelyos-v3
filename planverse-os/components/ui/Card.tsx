import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-3xl border border-[#2D2D2D] bg-[#171717] p-8 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
      {children}
    </div>
  );
}