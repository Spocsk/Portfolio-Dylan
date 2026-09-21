import type { Locale } from "./i18n";

export type WorkflowId = "lead" | "followup" | "synthesis";

export type WorkflowStep = {
  id: string;
  label: string;
  detail: string;
  primary?: boolean;
};

export type WorkflowScene = {
  id: WorkflowId;
  kicker: string;
  title: string;
  text: string;
  demoLabel: string;
  fictive: string;
  replay: string;
  input: string;
  inputDetail: string;
  output: string;
  outputDetail: string;
  retained: string;
  steps: readonly WorkflowStep[];
  beats: Readonly<Record<string, string>>;
};

const shared = {
  fr: { demoLabel: "Scénario démonstratif", fictive: "Données fictives", replay: "Rejouer", retained: "Contrôle humain conservé" },
  en: { demoLabel: "Demonstration scenario", fictive: "Fictional data", replay: "Replay", retained: "Human control retained" },
} as const;

const scenes: Record<Locale, readonly WorkflowScene[]> = {
  fr: [
    {
      id: "lead",
      kicker: "01 · Qualification",
      title: "Une conversation devient une opportunité exploitable.",
      text: "L’agent comprend la demande, repère l’information manquante, pose une question puis prépare une fiche structurée pour l’équipe.",
      ...shared.fr,
      input: "Chat entrant",
      inputDetail: "Camille / Atelier Sillage",
      output: "CRM / Opportunité 0042",
      outputDetail: "Fiche qualifiée transmise",
      steps: [
        { id: "message", label: "Message entrant", detail: "Camille décrit le suivi des devis." },
        { id: "extract", label: "Besoin extrait", detail: "Relances commerciales, sans perdre la validation." },
        { id: "question", label: "Question complémentaire", detail: "À quel moment l’équipe doit-elle agir ?" },
        { id: "record", label: "Fiche qualifiée", detail: "Besoin, règle J-3 et contrôle commercial.", primary: true },
      ],
      beats: {
        prospect: "Nous perdons du temps à relancer les devis.",
        agent: "Combien de jours avant l’échéance souhaitez-vous agir ?",
        answer: "Trois jours, avec validation du commercial.",
        need: "Suivi des devis",
        rule: "J-3",
        control: "Validation commerciale",
      },
    },
    {
      id: "followup",
      kicker: "02 · Relance J-3",
      title: "La bonne relance, au bon moment, après validation.",
      text: "Le workflow surveille les échéances, vérifie la règle métier, rédige le message et attend le feu vert humain avant programmation.",
      ...shared.fr,
      input: "Calendrier commercial",
      inputDetail: "Échéance : 25 sept. 2026",
      output: "Email / 22 sept. 09:15",
      outputDetail: "Relance programmée",
      steps: [
        { id: "deadline", label: "Échéance détectée", detail: "Le 25 septembre, dans trois jours." },
        { id: "rule", label: "Règle vérifiée", detail: "Si échéance à J-3, préparer une relance." },
        { id: "draft", label: "Relance préparée", detail: "Bonjour Camille, un point rapide sur votre devis…" },
        { id: "approval", label: "Validation humaine", detail: "Le message est relu avant envoi.", primary: true },
        { id: "schedule", label: "Programmation", detail: "22 sept. · 09:15" },
      ],
      beats: {
        month: "sept. 2026",
        deadline: "Échéance",
        rule: "Si échéance dans 3 jours, préparer une relance",
        draft: "Bonjour Camille, un point rapide sur votre devis…",
        approved: "Validé",
        scheduled: "Relance programmée · 22 sept. · 09:15",
      },
    },
    {
      id: "synthesis",
      kicker: "03 · Synthèse",
      title: "Les informations dispersées deviennent un plan d’action.",
      text: "Emails, documents et données CRM sont rassemblés. L’agent synthétise, propose les prochaines actions et laisse la décision à l’équipe.",
      ...shared.fr,
      input: "Email + PDF + CRM",
      inputDetail: "3 sources collectées",
      output: "Tableau / 2 actions",
      outputDetail: "Tâches prêtes à assigner",
      steps: [
        { id: "collect", label: "Sources collectées", detail: "Email, cahier des charges et historique." },
        { id: "summary", label: "Synthèse structurée", detail: "Priorité : relances de devis avec contrôle commercial." },
        { id: "actions", label: "Actions préparées", detail: "Confirmer la source, puis prototyper la règle J-3." },
        { id: "review", label: "Validation humaine", detail: "Rien n’est lancé tant que l’équipe n’a pas tranché.", primary: true },
      ],
      beats: {
        email: "Demande Atelier Sillage",
        pdf: "Cahier-des-charges.pdf",
        crm: "Historique du compte",
        summary: "PME artisanale, exemple fictif. Priorité : relances de devis avec contrôle commercial.",
        task1: "Confirmer la source des échéances",
        task2: "Prototyper la règle J-3",
        review: "À valider",
      },
    },
  ],
  en: [
    {
      id: "lead",
      kicker: "01 · Qualification",
      title: "A conversation becomes an actionable opportunity.",
      text: "The agent understands the request, finds the missing information, asks one question and prepares a structured record for the team.",
      ...shared.en,
      input: "Incoming chat",
      inputDetail: "Camille / Atelier Sillage",
      output: "CRM / Opportunity 0042",
      outputDetail: "Qualified record sent",
      steps: [
        { id: "message", label: "Incoming message", detail: "Camille describes quote follow-up." },
        { id: "extract", label: "Need extracted", detail: "Sales follow-ups, without losing approval." },
        { id: "question", label: "Follow-up question", detail: "When should the team act?" },
        { id: "record", label: "Qualified record", detail: "Need, D-3 rule and sales control.", primary: true },
      ],
      beats: {
        prospect: "We lose time following up on quotes.",
        agent: "How many days before the deadline should the team act?",
        answer: "Three days, after sales approval.",
        need: "Quote follow-up",
        rule: "D-3",
        control: "Sales approval",
      },
    },
    {
      id: "followup",
      kicker: "02 · D-3 follow-up",
      title: "The right follow-up, at the right time, after approval.",
      text: "The workflow watches deadlines, checks the business rule, drafts the message and waits for human approval before scheduling.",
      ...shared.en,
      input: "Sales calendar",
      inputDetail: "Deadline: Sep 25, 2026",
      output: "Email / Sep 22, 09:15",
      outputDetail: "Follow-up scheduled",
      steps: [
        { id: "deadline", label: "Deadline detected", detail: "September 25, three days out." },
        { id: "rule", label: "Rule checked", detail: "If the deadline is at D-3, prepare a follow-up." },
        { id: "draft", label: "Follow-up drafted", detail: "Hello Camille, a quick note about your quote…" },
        { id: "approval", label: "Human approval", detail: "The message is reviewed before sending.", primary: true },
        { id: "schedule", label: "Scheduling", detail: "Sep 22 · 09:15" },
      ],
      beats: {
        month: "Sep 2026",
        deadline: "Deadline",
        rule: "If the deadline is in 3 days, prepare a follow-up",
        draft: "Hello Camille, a quick note about your quote…",
        approved: "Approved",
        scheduled: "Follow-up scheduled · Sep 22 · 09:15",
      },
    },
    {
      id: "synthesis",
      kicker: "03 · Synthesis",
      title: "Scattered information becomes an action plan.",
      text: "Emails, documents and CRM data are gathered. The agent summarises, suggests next actions and leaves the decision to the team.",
      ...shared.en,
      input: "Email + PDF + CRM",
      inputDetail: "3 sources collected",
      output: "Board / 2 actions",
      outputDetail: "Tasks ready to assign",
      steps: [
        { id: "collect", label: "Sources collected", detail: "Email, specification and account history." },
        { id: "summary", label: "Structured summary", detail: "Priority: quote follow-ups with sales approval." },
        { id: "actions", label: "Actions prepared", detail: "Confirm the source, then prototype the D-3 rule." },
        { id: "review", label: "Human approval", detail: "Nothing starts until the team decides.", primary: true },
      ],
      beats: {
        email: "Atelier Sillage request",
        pdf: "Specification.pdf",
        crm: "Account history",
        summary: "Fictional craft SME. Priority: quote follow-ups with sales approval.",
        task1: "Confirm the deadline source",
        task2: "Prototype the D-3 rule",
        review: "Review",
      },
    },
  ],
};

export function getWorkflows(locale: Locale): readonly WorkflowScene[] {
  return scenes[locale];
}

export function getWorkflow(locale: Locale, id: WorkflowId): WorkflowScene {
  const scene = scenes[locale].find((item) => item.id === id);
  if (!scene) return scenes[locale][0];
  return scene;
}
