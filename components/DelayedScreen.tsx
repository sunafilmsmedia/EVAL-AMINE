"use client";

import { motion } from "framer-motion";
import type { Answers } from "@/lib/types";

interface Props {
  answers: Answers;
  onRestart: () => void;
}

// Page terminale pour les visiteurs qui veulent vendre dans plus de 8 mois.
// Comme NoSellScreen, AUCUNE capture de lead n'est faite ici : ces visiteurs
// ne sont pas une priorité immédiate, on les reprendra plus tard.
//
// `answers` reste en prop pour cohérence avec l'orchestration de page.tsx
// (et un futur usage analytique éventuel), mais n'est pas transmis ailleurs.
export default function DelayedScreen({ answers: _answers, onRestart }: Props) {
  void _answers;

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl text-center"
      >
        {/* Icône horloge — on revient plus tard, pas tout de suite */}
        <div className="mx-auto mb-7 w-14 h-14 rounded-full bg-[var(--color-gold)]/8 border border-[var(--color-gold)]/25 flex items-center justify-center">
          <svg className="w-6 h-6 text-[var(--color-brand-300)]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="10" cy="10" r="7.5" />
            <path d="M10 6V10L12.5 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-brand-300)] mb-3">
          Bien noté
        </p>
        <h1 className="display-title text-[1.9rem] sm:text-5xl text-[var(--color-brand-100)] text-balance">
          Pas pressé(e) ? On revient vous voir au bon moment.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed text-balance max-w-md mx-auto">
          Puisque vous ne comptez pas vendre avant plusieurs mois, on va vous recontacter
          dans environ 8 mois — pas avant. D&apos;ici là, aucun suivi de notre part.
        </p>

        <button
          onClick={onRestart}
          className="
            mt-10 inline-flex items-center gap-2
            px-6 py-3 rounded-full text-sm font-medium
            bg-[var(--color-brand-100)]/[0.04] border border-[var(--color-slate-accent)]/25
            text-[var(--color-brand-100)]
            hover:bg-[var(--color-brand-100)]/[0.08] hover:border-[var(--color-slate-accent)]/45
            transition-all
          "
        >
          Retour à l&apos;accueil
        </button>
      </motion.div>
    </div>
  );
}
