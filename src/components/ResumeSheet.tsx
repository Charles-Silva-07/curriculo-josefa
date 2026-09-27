import type { ReactNode } from "react";
import { addressFull, asset, contact, differentials, experience, images, objective, profile, skills } from "../data";

/*
 * Folha A4 (794 × 1122 px = 210 × 297 mm) usada para o PDF e para a impressão.
 * Fica fora da tela no site; no modo de impressão é a única coisa exibida.
 * A foto usa background-image porque o gerador de PDF não suporta object-fit.
 */

const C = { ink: "#272727", muted: "#666666", rose: "#9C5A5A", beige: "#EAD8C8", light: "#F7F0E8", gold: "#A8864C" };

function SideTitle({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, margin: "0 0 10px" }}>
      {children}
    </p>
  );
}

function MainTitle({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 12px" }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 23, fontWeight: 700, color: C.ink, margin: 0, whiteSpace: "nowrap" }}>
        {children}
      </h2>
      <span style={{ flex: 1, borderTop: `1.5px dashed ${C.beige}` }} />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, margin: 0 }}>{label}</p>
      <p style={{ fontSize: 12.5, fontWeight: 600, color: C.ink, margin: "3px 0 0", wordBreak: "break-word" }}>{value}</p>
    </div>
  );
}

export function ResumeSheet() {
  const sideSkills = ["Máquina reta", "Overloque", "Galoneira"];

  return (
    <div className="resume-offscreen" aria-hidden="true">
      <div
        id="resume-sheet"
        style={{
          width: 794,
          height: 1122,
          overflow: "hidden",
          display: "flex",
          background: "#FFFFFF",
          fontFamily: "Manrope, system-ui, sans-serif",
          color: C.ink,
          lineHeight: 1.5,
        }}
      >
        {/* Coluna lateral */}
        <aside style={{ width: 262, background: C.light, padding: "44px 30px", boxSizing: "border-box", borderRight: `1px solid ${C.beige}` }}>
          <div
            style={{
              width: 190,
              height: 228,
              margin: "0 auto",
              borderRadius: 22,
              backgroundImage: `url(${asset(images.photo)})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              border: "5px solid #FFFFFF",
              boxShadow: "0 10px 24px rgba(90,50,40,0.18)",
            }}
          />
          <div style={{ borderTop: `1.5px dashed ${C.gold}`, margin: "30px 0 24px", opacity: 0.6 }} />

          <SideTitle>Informações</SideTitle>
          <Info label="Endereço" value={addressFull} />
          <Info label="Naturalidade" value={profile.city} />
          <Info label="Experiência" value="Mais de 15 anos" />
          <Info label="Disponibilidade" value="Disponível para novas oportunidades" />

          {(contact.whatsapp || contact.phone || contact.email) && (
            <>
              <div style={{ height: 14 }} />
              <SideTitle>Contato</SideTitle>
              {contact.whatsapp && <Info label="WhatsApp" value={`+${contact.whatsapp}`} />}
              {contact.phone && <Info label="Telefone" value={contact.phone} />}
              {contact.email && <Info label="E-mail" value={contact.email} />}
            </>
          )}

          <div style={{ height: 14 }} />
          <SideTitle>Máquinas</SideTitle>
          {sideSkills.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9, fontSize: 12.5, fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: 7, background: C.rose, flexShrink: 0 }} />
              {s}
            </div>
          ))}

          <div style={{ height: 14 }} />
          <SideTitle>Diferenciais</SideTitle>
          {differentials.map((d) => (
            <p key={d} style={{ fontSize: 11.5, color: C.muted, margin: "0 0 8px", paddingLeft: 12, borderLeft: `2px solid ${C.beige}` }}>
              {d}
            </p>
          ))}
        </aside>

        {/* Coluna principal */}
        <main style={{ flex: 1, padding: "48px 44px 36px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
          <header>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 44, fontWeight: 700, lineHeight: 1, margin: 0, color: C.ink }}>
              {profile.name}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14 }}>
              <span style={{ width: 36, borderTop: `2px dashed ${C.gold}` }} />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: C.gold }}>{profile.role}</span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 19, fontStyle: "italic", fontWeight: 500, color: C.rose, margin: "16px 0 0", lineHeight: 1.3 }}>
              {profile.headline}
            </p>
          </header>

          <section style={{ marginTop: 30 }}>
            <MainTitle>Resumo profissional</MainTitle>
            <p style={{ fontSize: 12.5, color: C.muted, margin: 0, textAlign: "justify" }}>{profile.about[0]}</p>
          </section>

          <section style={{ marginTop: 24 }}>
            <MainTitle>Experiência profissional</MainTitle>
            <div style={{ display: "flex", gap: 14 }}>
              <span style={{ width: 10, height: 10, borderRadius: 10, background: C.rose, marginTop: 5, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 14.5, fontWeight: 700, margin: 0 }}>{experience.company}</p>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.rose, margin: "2px 0 6px" }}>
                  Cargo: {experience.role}
                </p>
                <p style={{ fontSize: 12.5, color: C.muted, margin: 0 }}>{experience.description}</p>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 24 }}>
            <MainTitle>Habilidades</MainTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 18px" }}>
              {skills.map((s) => (
                <div key={s.title} style={{ padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.beige}` }}>
                  <p style={{ fontSize: 12.5, fontWeight: 700, margin: 0 }}>{s.title}</p>
                  <p style={{ fontSize: 11, color: C.muted, margin: "2px 0 0", lineHeight: 1.4 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 24 }}>
            <MainTitle>Objetivo profissional</MainTitle>
            <p style={{ fontSize: 12.5, color: C.muted, margin: 0, textAlign: "justify" }}>{objective.text}</p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 17,
                fontStyle: "italic",
                fontWeight: 600,
                color: C.ink,
                margin: "14px 0 0",
                padding: "10px 16px",
                background: C.light,
                borderLeft: `3px solid ${C.gold}`,
                borderRadius: 6,
                lineHeight: 1.35,
              }}
            >
              “{objective.quote}”
            </p>
          </section>

          <footer style={{ marginTop: "auto", paddingTop: 14, display: "flex", justifyContent: "space-between", fontSize: 9.5, color: C.muted, borderTop: `1px dashed ${C.beige}` }}>
            <span>{profile.name} · {profile.role}</span>
            <span>Currículo profissional online</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
