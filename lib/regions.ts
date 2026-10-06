import type { Region } from "./types";

// ─────────────────────────────────────────────────────────────────────────
//  SECTEURS COUVERTS — Grand Montréal (El Amine Ghalem, RE/MAX Alliance).
//
//  Utilisé par le champ de recherche de secteur (dernière question) :
//  - recherche insensible aux accents et à la casse
//  - si le secteur tapé n'y figure pas, l'utilisateur peut toujours saisir
//    du texte libre (« Utiliser "…" ») — donc la liste n'a pas besoin d'être
//    exhaustive, mais couvrir le territoire améliore l'expérience.
//  Aucune coordonnée (lat/lng) n'est requise : seul `name` est affiché.
// ─────────────────────────────────────────────────────────────────────────
export const REGIONS: Region[] = [
  // ── Montréal — arrondissements ────────────────────────────────────────
  { id: "ahuntsic-cartierville", name: "Ahuntsic-Cartierville" },
  { id: "anjou", name: "Anjou" },
  { id: "cote-des-neiges-ndg", name: "Côte-des-Neiges–Notre-Dame-de-Grâce" },
  { id: "lachine", name: "Lachine" },
  { id: "lasalle", name: "LaSalle" },
  { id: "plateau-mont-royal", name: "Le Plateau-Mont-Royal" },
  { id: "sud-ouest", name: "Le Sud-Ouest" },
  { id: "ile-bizard-sainte-genevieve", name: "L'Île-Bizard–Sainte-Geneviève" },
  { id: "mercier-hochelaga-maisonneuve", name: "Mercier–Hochelaga-Maisonneuve" },
  { id: "montreal-nord", name: "Montréal-Nord" },
  { id: "outremont", name: "Outremont" },
  { id: "pierrefonds-roxboro", name: "Pierrefonds-Roxboro" },
  { id: "rdp-pat", name: "Rivière-des-Prairies–Pointe-aux-Trembles" },
  { id: "rosemont-la-petite-patrie", name: "Rosemont–La Petite-Patrie" },
  { id: "saint-laurent", name: "Saint-Laurent" },
  { id: "saint-leonard", name: "Saint-Léonard" },
  { id: "verdun", name: "Verdun" },
  { id: "ville-marie", name: "Ville-Marie (centre-ville)" },
  { id: "villeray-saint-michel-parc-ex", name: "Villeray–Saint-Michel–Parc-Extension" },

  // ── Villes de l'île de Montréal ───────────────────────────────────────
  { id: "westmount", name: "Westmount" },
  { id: "mont-royal", name: "Mont-Royal (Ville de)" },
  { id: "cote-saint-luc", name: "Côte-Saint-Luc" },
  { id: "hampstead", name: "Hampstead" },
  { id: "montreal-ouest", name: "Montréal-Ouest" },
  { id: "montreal-est", name: "Montréal-Est" },
  { id: "dorval", name: "Dorval" },
  { id: "pointe-claire", name: "Pointe-Claire" },
  { id: "kirkland", name: "Kirkland" },
  { id: "beaconsfield", name: "Beaconsfield" },
  { id: "baie-durfe", name: "Baie-D'Urfé" },
  { id: "sainte-anne-de-bellevue", name: "Sainte-Anne-de-Bellevue" },
  { id: "senneville", name: "Senneville" },
  { id: "dollard-des-ormeaux", name: "Dollard-des-Ormeaux" },

  // ── Laval (secteurs) ──────────────────────────────────────────────────
  { id: "chomedey", name: "Chomedey (Laval)" },
  { id: "sainte-rose", name: "Sainte-Rose (Laval)" },
  { id: "pont-viau", name: "Pont-Viau (Laval)" },
  { id: "laval-des-rapides", name: "Laval-des-Rapides" },
  { id: "vimont", name: "Vimont (Laval)" },
  { id: "auteuil", name: "Auteuil (Laval)" },
  { id: "duvernay", name: "Duvernay (Laval)" },
  { id: "fabreville", name: "Fabreville (Laval)" },
  { id: "sainte-dorothee", name: "Sainte-Dorothée (Laval)" },
  { id: "laval-ouest", name: "Laval-Ouest" },
  { id: "saint-francois", name: "Saint-François (Laval)" },
  { id: "saint-vincent-de-paul", name: "Saint-Vincent-de-Paul (Laval)" },

  // ── Rive-Nord ─────────────────────────────────────────────────────────
  { id: "terrebonne", name: "Terrebonne" },
  { id: "mascouche", name: "Mascouche" },
  { id: "repentigny", name: "Repentigny" },
  { id: "blainville", name: "Blainville" },
  { id: "boisbriand", name: "Boisbriand" },
  { id: "sainte-therese", name: "Sainte-Thérèse" },
  { id: "rosemere", name: "Rosemère" },
  { id: "lorraine", name: "Lorraine" },
  { id: "bois-des-filion", name: "Bois-des-Filion" },
  { id: "deux-montagnes", name: "Deux-Montagnes" },
  { id: "saint-eustache", name: "Saint-Eustache" },
  { id: "mirabel", name: "Mirabel" },

  // ── Rive-Sud ──────────────────────────────────────────────────────────
  { id: "longueuil", name: "Longueuil" },
  { id: "saint-hubert", name: "Saint-Hubert (Longueuil)" },
  { id: "greenfield-park", name: "Greenfield Park (Longueuil)" },
  { id: "brossard", name: "Brossard" },
  { id: "saint-lambert", name: "Saint-Lambert" },
  { id: "boucherville", name: "Boucherville" },
  { id: "saint-bruno-de-montarville", name: "Saint-Bruno-de-Montarville" },
  { id: "sainte-julie", name: "Sainte-Julie" },
  { id: "varennes", name: "Varennes" },
  { id: "chambly", name: "Chambly" },
  { id: "la-prairie", name: "La Prairie" },
  { id: "candiac", name: "Candiac" },
  { id: "saint-constant", name: "Saint-Constant" },
  { id: "beloeil", name: "Beloeil" },
];
