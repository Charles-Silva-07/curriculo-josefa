import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { address, asset, contact, images, profile, whatsappLink } from "../data";
import { ThreadLine } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function ExperienceSeal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center rounded-full bg-white shadow-lift ${className}`}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <text className="fill-rose-deep" style={{ fontSize: 9.2, letterSpacing: 2.1, fontWeight: 700, fontFamily: "Manrope" }}>
          <textPath href="#seal-circle">MAIS DE 15 ANOS • DE EXPERIÊNCIA •</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] rounded-full border border-dashed border-gold/70" />
      <span className="relative font-serif text-3xl font-bold leading-none text-ink sm:text-4xl">
        15<span className="text-gold">+</span>
      </span>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      {/* fundo */}
      <div className="fabric absolute inset-0 -z-10 opacity-70" />
      <div className="absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-beige/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />
      <ThreadLine className="absolute bottom-0 left-0 -z-10 hidden h-32 w-1/2 text-gold/40 lg:block" />

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-beige bg-white/80 px-4 py-2 text-xs font-semibold text-ink/80 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            Disponível para novas oportunidades
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-7 font-serif text-[3.1rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl xl:text-[5.6rem]"
          >
            Josefa
            <span className="block">da Silva <span className="italic text-rose-deep">Lima</span></span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex items-center gap-4"
          >
            <span className="stitch w-12 text-gold" />
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-gold-deep">{profile.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-8 max-w-xl text-pretty font-serif text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink || "#contato"}
              {...(whatsappLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn-primary group"
            >
              Entrar em contato
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#experiencia" className="btn-outline group">
              Ver experiência
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {contact.phone && (
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              href={`tel:+55${contact.phone.replace(/\D/g, "")}`}
              className="group mt-6 inline-flex items-center gap-3 text-ink"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-rose-soft text-rose-deep transition-colors group-hover:bg-rose-deep group-hover:text-white">
                <Phone size={17} />
              </span>
              <span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">Telefone</span>
                <span className="block text-lg font-bold tracking-wide transition-colors group-hover:text-rose-deep">{contact.phone}</span>
              </span>
            </motion.a>
          )}
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="relative order-1 mx-auto w-full max-w-[25rem] sm:max-w-[28rem] lg:order-2 lg:max-w-[30rem]"
        >
          {/* camadas de profundidade */}
          <motion.div style={{ y: backY }} className="absolute -bottom-4 -right-4 left-4 top-4 rounded-[2.2rem] bg-beige sm:-bottom-7 sm:-right-7 sm:left-7 sm:top-7" />
          <motion.div
            style={{ y: backY }}
            className="absolute -bottom-3 -left-3 -top-3 right-3 rounded-[2.4rem] border-[1.5px] border-dashed border-gold/70 sm:-bottom-4 sm:-left-8 sm:-top-4 sm:right-4"
          />

          <motion.div style={{ y: photoY }} className="group relative overflow-hidden rounded-[2rem] bg-beige shadow-photo">
            <img
              src={asset(images.photo)}
              alt={`Foto profissional de ${profile.name}, ${profile.role.toLowerCase()}`}
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/30" />

            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:inset-x-5 sm:bottom-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose-soft text-rose-deep">
                <MapPin size={17} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">Reside em</span>
                <span className="block text-sm font-semibold leading-snug text-ink">
                  {address.district} · <span className="whitespace-nowrap">{address.city}</span>
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="absolute -left-3 top-8 sm:-left-10 sm:top-12"
          >
            <ExperienceSeal className="h-24 w-24 sm:h-32 sm:w-32" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
