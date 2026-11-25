"use client";

// Inline script that runs during HTML parsing. On the client it renders as text/plain so
// React does not warn about script tags; suppressHydrationWarning accepts the type mismatch.
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
