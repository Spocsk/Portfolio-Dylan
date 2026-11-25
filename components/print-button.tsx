"use client";

export default function PrintButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "inverse" }) {
  return (
    <button type="button" className={`bt-btn bt-btn--${variant}`} onClick={() => window.print()} data-umami-event="cv_print">
      {children}
    </button>
  );
}
