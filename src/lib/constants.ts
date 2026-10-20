export const WHATSAPP_NUMBER = "+8619026524527";
export const WHATSAPP_DISPLAY = "+86 190 2652 4527";

export const getWhatsAppLink = (message: string) => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const POLES = [
  { id: "auto", label: "Export Auto", href: "#auto" },
  { id: "sourcing", label: "Sourcing & Fret", href: "#sourcing" },
  { id: "studies", label: "Etudes en Chine", href: "#etudes" },
] as const;

export type PoleId = (typeof POLES)[number]["id"];

export const COMPANY = {
  name: "SinoAfrica Trade",
  tagline: "Votre passerelle directe vers la Chine",
  email: "contact@sinoafricatrade.com",
  tiktok: "@sinoafricatrade",
  zones: ["Gabon", "Chine"],
};