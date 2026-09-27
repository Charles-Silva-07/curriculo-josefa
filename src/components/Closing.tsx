import { ArrowRight, ArrowUp, Download, LoaderCircle, Mail, MapPin, Phone, Printer, Quote } from "lucide-react";
import { address, addressFull, contact, hasContact, objective, profile, whatsappLink } from "../data";
import { Reveal, SectionHeading, ThreadLine, WhatsAppIcon } from "./ui";
import { useResume } from "./useResume";

function ResumeButtons({ className = "" }: { className?: string }) {
  const { download, print, generating } = useResume();
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <button type="button" onClick={download} disabled={generating} className="btn-primary">
        {generating ? <LoaderCircle size={16} className="animate-spin" /> : <Download size={16} />}
        {generating ? "Gerando PDF…" : "Baixar currículo em PDF"}
      </button>
      <button type="button" onClick={print} className="btn-outline">
        <Printer size={16} />
        Imprimir currículo
      </button>
    </div>
  );
}

export function Objective() {
  return (
    <section id="objetivo" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <ThreadLine className="absolute -left-10 top-10 hidden h-40 md:block w-[70%] text-gold/30" />
      <ThreadLine className="absolute -right-10 bottom-6 hidden h-32 md:block w-[60%] rotate-180 text-rose/30" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Objetivo profissional" title={objective.title} align="left" light />
          <Reveal delay={0.1}>
            <p className="-mt-4 max-w-xl text-pretty text-lg leading-relaxed text-cream/75">{objective.text}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <blockquote className="relative rounded-[2rem] border border-dashed border-gold/40 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12">
            <Quote size={48} strokeWidth={1.2} className="text-gold" aria-hidden="true" />
            <p className="mt-6 text-pretty font-serif text-3xl font-medium italic leading-snug text-cream sm:text-[2.3rem]">
              {objective.quote}
            </p>
            <footer className="mt-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="stitch w-10" />
              {profile.name}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export function Availability() {
  return (
    <section className="py-24 md:py-28">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-beige-light via-white to-rose-soft p-8 shadow-lift sm:p-12 md:p-16 max-sm:px-5">
            <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-dashed border-gold/50 sm:inset-4" />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink/80 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  Disponibilidade
                </span>
                <h2 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
                  Disponível para novas oportunidades
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted md:text-lg">
                  Profissional experiente na área de costura e confecção, buscando uma oportunidade mais próxima de casa.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <a href="#experiencia" className="btn-outline group">
                  Conhecer meu perfil
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <ResumeButtons className="!flex-col" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const channels = [
    contact.whatsapp && { icon: WhatsAppIcon, label: "WhatsApp", value: contact.phone || "Enviar mensagem", href: whatsappLink },
    contact.phone && { icon: Phone, label: "Telefone", value: contact.phone, href: `tel:+55${contact.phone.replace(/\D/g, "")}` },
    contact.email && { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean) as { icon: (p: { size?: number }) => JSX.Element; label: string; value: string; href: string }[];

  return (
    <section id="contato" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="fabric absolute inset-0 opacity-40" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar?"
          subtitle="Se sua empresa está procurando uma profissional com experiência em costura e confecção, entre em contato para conhecer melhor meu perfil profissional."
        />

        <div className="mx-auto max-w-4xl">
          {hasContact && (
            <div className={`grid gap-4 ${channels.length > 1 ? "sm:grid-cols-2" : ""} ${channels.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {channels.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={0.08 * i}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card group flex items-center gap-4 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-rose/40 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose-soft text-rose-deep transition-colors group-hover:bg-rose-deep group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</span>
                      <span className="block break-words font-semibold text-ink">{value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-col items-center gap-6 rounded-3xl border border-dashed border-gold/50 bg-cream p-8 text-center sm:p-10">
              <div className="flex flex-col items-center gap-1.5">
                <span className="inline-flex items-start gap-2 text-sm font-semibold text-ink">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-rose-deep" />
                  {addressFull}
                </span>
                <span className="text-xs text-muted">Natural de {profile.city}</span>
              </div>
              <p className="max-w-md text-pretty font-serif text-2xl font-medium leading-snug text-ink">
                Leve meu currículo com você ou imprima para sua equipe.
              </p>
              <ResumeButtons className="w-full justify-center sm:w-auto" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink py-14 text-cream">
      <div className="container flex flex-col items-center gap-6 text-center">
        <p className="font-serif text-3xl font-semibold">{profile.name}</p>
        <p className="text-sm uppercase tracking-[0.25em] text-gold">
          {profile.role} <span className="text-cream/30">|</span> {address.city}
        </p>
        <span className="stitch w-40 text-cream/20" />
        <p className="text-xs text-cream/50">Currículo profissional online</p>
        <a
          href="#inicio"
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream/70 transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
