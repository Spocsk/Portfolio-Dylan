import { existsSync } from "node:fs";
import path from "node:path";

import { ArrowUpRight, Check, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import type { Locale } from "../lib/i18n";
import { bookingUrl, getServiceCopy } from "../lib/service-content";
import { siteConfig } from "../lib/site";
import { WorkflowShowcase } from "./automation-visuals";
import LearningPipeline from "./learning-pipeline";

function BookingActions({ locale, emailSubject, context }: { locale: Locale; emailSubject: string; context: string }) {
  const copy = getServiceCopy(locale);
  return (
    <div className="service-actions">
      <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer" data-umami-event="calendar_click" data-umami-event-context={context} data-umami-event-placement={context}>{copy.common.book}<ArrowUpRight /></a>
      <a className="text-action" href={`mailto:${copy.common.email}?subject=${encodeURIComponent(emailSubject)}`} data-umami-event="contact_email_click" data-umami-event-context={context} data-umami-event-placement={context}><EnvelopeSimple />{copy.common.email}</a>
    </div>
  );
}

function OfferFaq({ entries }: { entries: ReadonlyArray<{ question: string; answer: string }> }) {
  return (
    <section className="offer-faq">
      {entries.map((entry) => (
        <article key={entry.question}>
          <h2>{entry.question}</h2>
          <p>{entry.answer}</p>
        </article>
      ))}
    </section>
  );
}

export function EducationPage({ locale = "fr" }: { locale?: Locale }) {
  const copy = getServiceCopy(locale);
  const page = copy.education;
  return (
    <>
      <section className="service-hero education-hero">
        <div><h1>{page.title}</h1><p>{page.lead}</p><BookingActions locale={locale} context="education" emailSubject={locale === "fr" ? "Intervention en école" : "Teaching engagement"} /></div>
        <aside><span>{locale === "fr" ? "Disponibilité" : "Availability"}</span><p>{page.availability}</p><div className="availability-line"><i /><i /><i className="is-open" /><i /><i /></div></aside>
      </section>

      <section className="topics-section">
        <div className="section-heading"><span>{page.topicsLabel}</span><h2>{page.topicsTitle}</h2></div>
        <div className="topic-list">{page.topics.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="method-section">
        <div className="method-copy"><span className="eyebrow">{page.methodLabel}</span><h2>{page.methodTitle}</h2><p>{page.methodText}</p></div>
        <LearningPipeline locale={locale} />
      </section>

      <section className="formats-section">
        <div><span className="eyebrow">{page.formatsLabel}</span>{page.formats.map((format, index) => <p key={format}><span>0{index + 1}</span>{format}</p>)}</div>
        <div><span className="eyebrow">{page.proofLabel}</span>{page.proof.map((item) => <p key={item}><Check />{item}</p>)}</div>
      </section>

      <OfferFaq entries={page.faq} />
      <section className="closing-cta"><span>Contact</span><h2>{locale === "fr" ? "Construisons une intervention utile à vos étudiants." : "Let’s build a useful learning experience for your students."}</h2><BookingActions locale={locale} context="education" emailSubject={locale === "fr" ? "Intervention en école" : "Teaching engagement"} /></section>
    </>
  );
}

export function AutomationPage({ locale = "fr" }: { locale?: Locale }) {
  const copy = getServiceCopy(locale);
  const page = copy.automation;
  return (
    <>
      <section className="service-hero automation-hero">
        <div><h1>{page.title}</h1><p>{page.lead}</p><BookingActions locale={locale} context="automation" emailSubject={locale === "fr" ? "Projet d’automatisation IA" : "AI automation project"} /></div>
        <aside className="stack-panel"><span>{locale === "fr" ? "Socle technique" : "Technical foundation"}</span><strong>{page.stack}</strong><p>{locale === "fr" ? "Choisi après cadrage, jamais pour l’effet de mode." : "Selected after discovery, never for hype."}</p></aside>
      </section>

      <WorkflowShowcase locale={locale} />

      <section className="process-section">
        <div className="section-heading"><span>{page.processLabel}</span><h2>{page.processTitle}</h2></div>
        <ol>{page.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
      </section>

      <section className="safeguards-section">
        <div><ShieldCheck weight="duotone" /><span className="eyebrow">{page.safeguardsLabel}</span><h2>{locale === "fr" ? "L’autonomie reste sous contrôle." : "Autonomy stays under control."}</h2></div>
        <ul>{page.safeguards.map((item) => <li key={item}><Check />{item}</li>)}</ul>
      </section>

      <section className="notes-section"><p>{page.launch}</p><p>{page.hermes}</p></section>
      <OfferFaq entries={page.faq} />
      <section className="closing-cta"><span>Contact</span><h2>{locale === "fr" ? "Partons d’un seul workflow qui mérite d’être simplifié." : "Let’s start with one workflow worth simplifying."}</h2><BookingActions locale={locale} context="automation" emailSubject={locale === "fr" ? "Projet d’automatisation IA" : "AI automation project"} /></section>
    </>
  );
}

function portraitSrc() {
  for (const file of ["portrait.webp", "portrait.jpg", "portrait.jpeg", "portrait.png"]) {
    if (existsSync(path.join(process.cwd(), "public", file))) return `/${file}`;
  }
  return null;
}

export function AboutPageContent({ locale = "fr" }: { locale?: Locale }) {
  const copy = getServiceCopy(locale);
  const page = copy.about;
  const portrait = portraitSrc();
  return (
    <>
      <section className="about-hero">
        <div>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
        </div>
        {portrait ? (
          <figure className="about-portrait">
            <span className="about-portrait-plate" aria-hidden="true" />
            <img src={portrait} alt={siteConfig.name} />
            <figcaption>{copy.home.signature}</figcaption>
          </figure>
        ) : null}
      </section>
      <section className="pillar-list">{page.pillars.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="about-journey">
        <div className="section-heading"><span>{page.journeyLabel}</span><h2>{page.journeyTitle}</h2></div>
        <ol>
          {page.journey.map(([period, title, text]) => (
            <li key={title}><span>{period}</span><div><h3>{title}</h3><p>{text}</p></div></li>
          ))}
        </ol>
      </section>
      <section className="about-method">
        <span>{locale === "fr" ? "Ma méthode" : "My method"}</span>
        <div>
          <p>{page.method}</p>
          <ul>{page.methodItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="closing-cta"><span>Contact</span><h2>{locale === "fr" ? "Voyons ce que nous pouvons rendre plus clair, plus solide ou plus fluide." : "Let’s see what we can make clearer, stronger or smoother."}</h2><BookingActions locale={locale} context="about" emailSubject={locale === "fr" ? "Prise de contact" : "Introduction"} /></section>
    </>
  );
}

export function ContactPageContent({ locale = "fr" }: { locale?: Locale }) {
  const copy = getServiceCopy(locale);
  const page = copy.contact;
  return (
    <>
      <section className="simple-hero contact-hero"><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.lead}</p></section>
      <section className="contact-options">{page.options.map(([title, text, subject]) => <article key={title}><h2>{title}</h2><p>{text}</p><div><a href={bookingUrl} target="_blank" rel="noreferrer" data-umami-event="calendar_click" data-umami-event-context={subject} data-umami-event-placement="contact">{copy.common.book}<ArrowUpRight /></a><a href={`mailto:${copy.common.email}?subject=${encodeURIComponent(subject)}`} data-umami-event="contact_email_click" data-umami-event-context={subject} data-umami-event-placement="contact">Email<EnvelopeSimple /></a></div></article>)}</section>
      <OfferFaq entries={page.faq} />
      <section className="contact-direct"><span>{copy.common.location}</span><a href={`mailto:${copy.common.email}`} data-umami-event="contact_email_click" data-umami-event-context="contact" data-umami-event-placement="contact">{copy.common.email}</a></section>
    </>
  );
}
