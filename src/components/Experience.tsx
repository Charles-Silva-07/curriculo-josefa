import { BadgeCheck, Briefcase, Expand, Scissors, Target } from "lucide-react";
import { useState } from "react";
import { asset, experience, images } from "../data";
import { Reveal, SectionHeading } from "./ui";

const timeline = [
  {
    icon: Briefcase,
    tag: "Registro em carteira",
    title: experience.company,
    meta: `Cargo: ${experience.role}`,
    text: experience.description,
  },
  {
    icon: Scissors,
    tag: "Trajetória",
    title: "Confecção e ajustes",
    meta: "Mais de 15 anos de experiência",
    text: "Experiência com produção, ajustes e acabamento de peças, operando máquina reta, overloque e galoneira.",
  },
  {
    icon: Target,
    tag: "Próximo passo",
    title: "Nova oportunidade",
    meta: "Disponível",
    text: "Em busca de uma oportunidade profissional mais próxima de casa.",
  },
];

export function Experience() {
  const [hasCard, setHasCard] = useState(true);

  return (
    <section id="experiencia" className="relative bg-white py-24 md:py-32">
      <div className="fabric absolute inset-0 opacity-40" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          subtitle="Uma trajetória construída com experiência prática e dedicação."
        />

        <div className={`grid gap-12 ${hasCard ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : "mx-auto max-w-3xl"}`}>
          {/* Linha do tempo */}
          <div className="relative">
            <span className="stitch-v absolute bottom-6 left-[1.6rem] top-6 text-gold/70" aria-hidden="true" />
            {timeline.map(({ icon: Icon, tag, title, meta, text }, i) => (
              <Reveal key={title} delay={0.12 * i} className="relative pb-8 pl-[4.5rem] last:pb-0 sm:pl-20">
                <div>
                  <span
                    className={`absolute left-0 top-1 grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border-4 border-white shadow-soft ${
                      i === 0 ? "bg-rose-deep text-white" : "bg-beige-light text-rose-deep"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <div className="card group p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                    <span className="inline-block rounded-full bg-beige-light px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-deep">
                      {tag}
                    </span>
                    <h3 className="mt-4 font-serif text-[1.9rem] font-semibold leading-tight text-ink">{title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-rose-deep">{meta}</p>
                    <p className="mt-4 leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Experiência comprovada — carteira de trabalho (imagem original, sem alterações) */}
          {hasCard && (
            <Reveal delay={0.2}>
              <figure className="card overflow-hidden p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3 px-2 pb-4 pt-2">
                  <div>
                    <p className="eyebrow !tracking-[0.2em]">
                      <BadgeCheck size={16} className="text-rose-deep" />
                      Experiência comprovada
                    </p>
                    <p className="mt-1 text-sm text-muted">Carteira de trabalho</p>
                  </div>
                  <a
                    href={asset(images.workCard)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-beige text-ink/70 transition-colors hover:border-rose hover:text-rose-deep"
                    aria-label="Abrir imagem da carteira de trabalho em tamanho real"
                  >
                    <Expand size={16} />
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-dashed border-gold/60 bg-beige-light p-2">
                  <img
                    src={asset(images.workCard)}
                    alt={`Carteira de trabalho — registro na empresa ${experience.company}, cargo de ${experience.role.toLowerCase()}`}
                    className="w-full rounded-xl"
                    loading="lazy"
                    onError={() => setHasCard(false)}
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-4 text-sm leading-relaxed text-muted">
                  Registro profissional na empresa <strong className="font-semibold text-ink">{experience.company}</strong>,
                  cargo de {experience.role.toLowerCase()}.
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
