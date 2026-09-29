// ─────────────────────────────────────────────────────────────────────────
//  CONFIG DE MARQUE — WHITE LABEL
//  Le SEUL fichier à éditer pour rebrander l'app à un nouveau client.
//  (+ lib/regions.ts pour la liste des secteurs, + les images dans /public,
//   + les variables d'environnement pour les intégrations : voir .env.local.example)
//
//  Palette : noir / doré / blanc. Les couleurs se règlent dans app/globals.css
//  (bloc @theme) — cherche les variables --color-brand-* et --color-gold.
// ─────────────────────────────────────────────────────────────────────────

export interface BrokerConfig {
  name: string;
  title: string;
  /** Chemin de la photo dans /public (ex. "/broker-1.jpg") */
  photo: string;
  /** Cadrage de la photo dans le rond du badge (ex. "50% 18%") */
  objectPosition: string;
  /** Téléphone affiché (ex. "514 000-0000") */
  phoneDisplay: string;
  /** Téléphone au format tel: (ex. "+15140000000") */
  phoneTel: string;
}

export interface BrandConfig {
  /** Identifiant court du déploiement — sert de "source" au CRM et de projet Clarity Scanner par défaut. */
  slug: string;

  /** Nom de l'équipe (affiché en filigrane dans le formulaire, le footer, le consentement). */
  teamName: string;

  /** Région / territoire couvert (textes marketing, rapport de repli, footer). */
  region: string;
  /** Ville centrale (utilisée dans les textes du rapport de repli). */
  city: string;

  /** Carte décorative du hero. */
  map: {
    center: [number, number]; // [lat, lng]
    zoom: number;
  };

  /** Textes du hero. */
  hero: {
    chip: string;
    title: string;
    /** Segment exact du titre en or shimmer + police douce (serif italique) (ex. "bon moment"). Optionnel. */
    titleHighlight?: string;
    /** Segment exact du titre en police douce dorée (serif italique) (ex. "Gatineau"). Optionnel. */
    titleSoft?: string;
    subtitle: string;
    signature: string; // "Boosté par l'IA"
    cta: string;
    ctaHint: string;
    scrollHint: string;
  };

  /** Logos fixes en haut (équipe à gauche, bannière à droite). */
  logos: {
    team: { src: string; alt: string; width: number; height: number };
    banner: { src: string; alt: string; width: number; height: number };
  };

  /** Courtier(s). Ici : Véronique seule. Les noms servent aux textes du rapport (le badge flottant a été retiré). */
  brokers: BrokerConfig[];
}

export const BRAND: BrandConfig = {
  slug: "eval-amine",

  teamName: "El-Amine Ghalem",

  region: "le Grand Montréal",
  city: "Montréal",

  map: {
    // Montréal (secteur Ahuntsic / St-Laurent — bureau au 10310 boul. St-Laurent).
    center: [45.5528, -73.6626],
    zoom: 12,
  },

  hero: {
    chip: "Estimation personnalisée",
    title: "Est-ce le bon moment pour vendre votre propriété à Montréal ?",
    titleHighlight: "bon moment",
    titleSoft: "Montréal",
    subtitle:
      "Répondez à une dizaine de questions et recevez une analyse honnête et confidentielle de votre timing, basée sur votre plus-value, votre équité et votre situation.",
    signature: "Boosté par l'IA",
    cta: "Commencer mon évaluation",
    ctaHint: "3 minutes — gratuit et confidentiel",
    scrollHint: "Confidentiel · Sans engagement",
  },

  logos: {
    team: {
      // Signature / wordmark d'El-Amine Ghalem (placeholder à remplacer par le vrai fichier).
      src: "/amine-ghalem.svg",
      alt: "El-Amine Ghalem — Courtier immobilier",
      width: 800,
      height: 228,
    },
    banner: {
      // Logo de son agence : RE/MAX Alliance (haut à droite).
      src: "/remax-alliance.svg",
      alt: "RE/MAX Alliance — Agence immobilière",
      width: 800,
      height: 300,
    },
  },

  // Courtier unique. Le badge flottant a été retiré dans le template (aucun numéro affiché
  // par défaut) — on garde ses coordonnées ici au cas où on le réactive.
  brokers: [
    {
      name: "El-Amine Ghalem",
      title: "Courtier immobilier · RE/MAX Alliance",
      photo: "/broker-1.svg",
      objectPosition: "50% 30%",
      phoneDisplay: "514 294-2872",
      phoneTel: "+15142942872",
    },
  ],
};

/** "Prénom ou Prénom" — utilisé dans les textes qui nomment l'équipe. */
export function brokersInlineNames(): string {
  const firsts = BRAND.brokers.map((b) => b.name.split(/\s+/)[0]).filter(Boolean);
  if (firsts.length === 0) return "un courtier";
  if (firsts.length === 1) return firsts[0];
  return `${firsts.slice(0, -1).join(", ")} ou ${firsts[firsts.length - 1]}`;
}
