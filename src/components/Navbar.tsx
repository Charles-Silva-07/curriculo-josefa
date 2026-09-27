import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "habilidades", label: "Habilidades" },
  { id: "objetivo", label: "Objetivo" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const initials = profile.name
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-beige/60 bg-cream/85 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-[4.5rem] items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-serif text-lg font-semibold text-rose-deep transition-colors group-hover:bg-rose-deep group-hover:text-white">
            {initials}
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold">{profile.name}</span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-muted">{profile.role}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-rose-deep" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="nav-dot" className="absolute inset-x-4 -bottom-0.5 stitch text-rose" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="btn-primary hidden !min-h-[2.6rem] !px-5 !text-[0.7rem] lg:inline-flex">
          Entrar em contato
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-full border border-beige bg-white/80 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4.5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fabric overflow-y-auto bg-cream lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-dashed border-beige py-4 font-serif text-2xl font-semibold"
                  >
                    {l.label}
                    <span className="text-xs font-sans font-semibold tracking-widest text-gold-deep">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Entrar em contato
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
