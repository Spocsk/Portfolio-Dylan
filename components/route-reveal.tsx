"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type PropsWithChildren, useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function RouteReveal({ children, path }: PropsWithChildren<{ path: string }>) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(root.current, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: "power2.out", clearProps: "opacity" });
  }, { dependencies: [path] });

  return <div ref={root}>{children}</div>;
}
