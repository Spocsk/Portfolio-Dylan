"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type PropsWithChildren, useRef } from "react";

import { motionAllowed } from "../lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeMotion({ children }: PropsWithChildren) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!root.current || !motionAllowed()) return;
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .from("[data-hero-line]", { yPercent: 110, duration: 0.85, stagger: 0.07 })
      .from("[data-hero-facet]", { y: 18, autoAlpha: 0, duration: 0.45, stagger: 0.08 }, "-=0.35")
      .from("[data-hero-rest]", { y: 16, autoAlpha: 0, duration: 0.5 }, "-=0.25");

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const triggers = reveals.map((element) =>
      gsap.from(element, {
        y: 36,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 84%", once: true },
      }),
    );

    return () => {
      timeline.kill();
      triggers.forEach((item) => item.kill());
    };
  }, { scope: root });

  return <div ref={root}>{children}</div>;
}
