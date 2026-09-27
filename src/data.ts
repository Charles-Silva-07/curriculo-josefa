/*
 * ============================================================
 *  DADOS DO CURRÍCULO — edite apenas este arquivo
 * ============================================================
 *
 *  CONTATO: preencha quando tiver os dados. Campos vazios ("")
 *  ficam ocultos no site e no PDF.
 *
 *  whatsapp: só números, com 55 + DDD. Ex.: "5588999999999"
 *  phone:    como deve aparecer.       Ex.: "(88) 99999-9999"
 *  email:    Ex.: "nome@gmail.com"
 */
export const contact = {
  whatsapp: "",
  phone: "",
  email: "",
};

// Imagens ficam na pasta /public.
// A carteira de trabalho só aparece se o arquivo existir.
export const images = {
  photo: "foto.jpeg",
  workCard: "carteira.jpeg",
};

export const profile = {
  name: "Josefa da Silva Lima",
  role: "Costureira",
  city: "Juazeiro do Norte – CE", // naturalidade
  headline: "Experiência, dedicação e conhecimento na confecção e no acabamento de peças.",
  summary:
    "Profissional com mais de 15 anos de experiência na área de confecção, ajustes e operação de máquinas industriais.",
  about: [
    "Sou Josefa da Silva Lima, costureira com mais de 15 anos de experiência na área de confecção e ajustes. Ao longo da minha trajetória profissional, desenvolvi experiência com máquinas de costura e processos de produção, sempre buscando qualidade, atenção aos detalhes e bom acabamento.",
    "Atualmente estou em busca de uma nova oportunidade profissional mais próxima de casa, devido à distância do meu atual local de trabalho.",
  ],
};

// Endereço onde mora (sem o número da casa, de propósito)
export const address = {
  street: "Rua Dona Amélia",
  district: "Jardim Mimas",
  city: "Embu das Artes – SP",
};
export const addressFull = `${address.street} – ${address.district}, ${address.city}`;

export const experience = {
  company: "TDB Têxtil S/A",
  role: "Costureira",
  description: "Experiência profissional na área de confecção e costura.",
};

export const skills = [
  { title: "Costura industrial", text: "Experiência com produção e confecção de peças." },
  { title: "Máquina reta", text: "Domínio de máquina reta." },
  { title: "Overloque", text: "Experiência e domínio de máquina overloque." },
  { title: "Galoneira", text: "Experiência com máquina galoneira." },
  { title: "Confecção", text: "Mais de 15 anos de experiência em confecção." },
  { title: "Ajustes", text: "Experiência com ajustes e acabamento de peças." },
];

export const differentials = [
  "Mais de 15 anos de experiência",
  "Experiência prática em confecção",
  "Domínio de máquinas de costura",
  "Compromisso com qualidade e acabamento",
];

export const objective = {
  title: "Em busca de uma nova oportunidade",
  text: "Estou em busca de uma oportunidade profissional mais próxima de casa. A mudança de local de trabalho está relacionada principalmente à distância do atual emprego.",
  quote: "Quero continuar contribuindo com minha experiência e dedicação em uma nova oportunidade profissional.",
};

export const hasContact = Boolean(contact.whatsapp || contact.phone || contact.email);

export const whatsappLink = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      "Olá, Josefa! Vi seu currículo online e gostaria de conversar sobre uma oportunidade.",
    )}`
  : "";

export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;
