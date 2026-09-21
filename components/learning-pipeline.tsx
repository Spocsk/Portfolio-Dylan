"use client";

import { useGSAP } from "@gsap/react";
import { ArrowRight, Check, Code, Cube, PresentationChart, TestTube } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import type { Locale } from "../lib/i18n";
import { motionAllowed } from "../lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LearningPipeline({ locale = "fr" }: { locale?: Locale }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!motionAllowed()) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-pipeline-step]");
    gsap.from(items, {
      opacity: 0,
      x: -18,
      stagger: 0.16,
      duration: 0.55,
      ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
    });
  }, { scope: root });

  const steps = locale === "fr"
    ? [["01", "Brief métier", PresentationChart], ["02", "Architecture", Code], ["03", "Tests", TestTube], ["04", "Livraison", Cube]] as const
    : [["01", "Business brief", PresentationChart], ["02", "Architecture", Code], ["03", "Tests", TestTube], ["04", "Delivery", Cube]] as const;

  return (
    <div className="learning-pipeline" ref={root}>
      <div className="pipeline-head">
        <span>{locale === "fr" ? "PROJET FIL ROUGE" : "CAPSTONE PROJECT"}</span>
        <span className="pipeline-live"><i />{locale === "fr" ? "Progression visible" : "Visible progress"}</span>
      </div>
      <div className="pipeline-steps">
        {steps.map(([number, label, Icon], index) => (
          <div className="pipeline-step" data-pipeline-step key={number}>
            <span>{number}</span>
            <Icon weight="duotone" />
            <strong>{label}</strong>
            {index < steps.length - 1 ? <ArrowRight className="pipeline-arrow" /> : <Check className="pipeline-check" weight="bold" />}
          </div>
        ))}
      </div>
      <div className="pipeline-terminal">
        <span>$ npm run validate</span>
        <strong>{locale === "fr" ? "✓ application testée · documentée · présentée" : "✓ application tested · documented · presented"}</strong>
      </div>
    </div>
  );
}
