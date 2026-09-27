import { Cog, Quote, Scissors, Award } from "lucide-react";
import { profile } from "../data";
import { Reveal, SectionHeading } from "./ui";

const stats = [
  { icon: Award, value: "+15 anos", label: "Experiência profissional" },
  { icon: Scissors, value: "Costura", label: "Confecção e ajustes" },
  { icon: Cog, value: "Máquinas", label: "Experiência com máquinas industriais" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Apresentação" title="Sobre mim" />

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <article className="card relative h-full overflow-hidden p-7 sm:p-10 md:p-12">
              <span className="absolute left-0 top-10 h-24 w-1 rounded-r-full bg-gradient-to-b from-rose to-gold" />
              <Quote className="mb-6 text-beige" size={44} strokeWidth={1.5} aria-hidden="true" />
              <p className="text-pretty font-serif text-2xl font-medium leading-snug text-ink md:text-[1.7rem]">
                {profile.about[0]}
              </p>
              <div className="stitch my-8 w-full text-beige" />
              <p className="text-pretty leading-relaxed text-muted md:text-lg">{profile.about[1]}</p>
              <p className="mt-8 font-serif text-xl italic text-rose-deep">— {profile.name}</p>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1 lg:gap-5">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={value} delay={0.1 * (i + 1)}>
                <div className="card group flex h-full items-center gap-5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift sm:flex-col sm:items-start lg:flex-row lg:items-center lg:p-7">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-beige-light text-rose-deep transition-colors duration-500 group-hover:bg-rose-deep group-hover:text-white">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-serif text-3xl font-semibold uppercase leading-none tracking-wide text-ink">
                      {value}
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-muted">{label}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
