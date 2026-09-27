import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <span className={`eyebrow ${light ? "text-gold" : ""}`}>
        <span className="stitch w-8 text-gold" />
        {eyebrow}
        {centered && <span className="stitch w-8 text-gold" />}
      </span>
      <h2
        className={`mt-4 text-balance font-serif text-[2.4rem] font-semibold leading-[1.05] sm:text-5xl md:text-[3.4rem] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-pretty text-base leading-relaxed md:text-lg ${light ? "text-cream/70" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* Linha de costura decorativa (pesponto) em forma de onda */
export function ThreadLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 120" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0 80 C 120 10, 220 120, 330 60 S 520 20, 600 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
    </svg>
  );
}
