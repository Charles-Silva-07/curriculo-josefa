import { motion } from "framer-motion";
import { Award, Cog, Factory, Gem, Layers, Ruler, Scissors, Shirt, Spool, Waves, type LucideIcon } from "lucide-react";
import { differentials, skills } from "../data";
import { Reveal, SectionHeading } from "./ui";

const skillIcons: LucideIcon[] = [Factory, Ruler, Waves, Spool, Shirt, Scissors];

export function Skills() {
  return (
    <section id="habilidades" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Competências"
          title="Experiência e habilidades"
          subtitle="Conhecimento prático em confecção, acabamento e operação de máquinas de costura."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skills.map((s, i) => {
            const Icon = skillIcons[i];
            return (
              <Reveal key={s.title} delay={0.07 * i}>
                <article className="card group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift sm:p-8">
                  {/* contorno pespontado que aparece no hover */}
                  <span className="pointer-events-none absolute inset-2.5 rounded-[1.2rem] border border-dashed border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-beige-light text-rose-deep transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-rose-deep group-hover:text-white">
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                    <span className="font-serif text-2xl font-semibold text-beige transition-colors duration-500 group-hover:text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-[1.75rem] font-semibold leading-tight text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const diffIcons: LucideIcon[] = [Award, Layers, Cog, Gem];

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-beige-light py-24 md:py-32">
      <div className="fabric absolute inset-0 opacity-60" />
      <div className="container relative">
        <SectionHeading eyebrow="Diferenciais" title="Por que contar com minha experiência?" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => {
            const Icon = diffIcons[i];
            return (
              <Reveal key={d} delay={0.1 * i}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-soft sm:p-8"
                >
                  <span className="font-serif text-6xl font-bold leading-none text-beige transition-colors duration-500 group-hover:text-rose/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold-deep transition-all duration-500 group-hover:scale-110 group-hover:border-rose-deep group-hover:bg-rose-deep group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-pretty font-serif text-2xl font-semibold leading-tight text-ink">{d}</h3>
                  <div className="mt-auto pt-7">
                    <span className="stitch block w-10 text-rose transition-all duration-700 group-hover:w-full" />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
