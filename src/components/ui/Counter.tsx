"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

export function Counter({
  value,
  suffix = "",
  label,
  size = "lg",
}: {
  value: number;
  suffix?: string;
  label: string;
  size?: "md" | "lg";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className={cn(
          "font-bold text-accent-blue",
          size === "lg" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
        )}
      >
        {display}
        {suffix}
      </span>
      <p className="mt-1 text-xs md:text-sm text-text-secondary">{label}</p>
    </div>
  );
}
