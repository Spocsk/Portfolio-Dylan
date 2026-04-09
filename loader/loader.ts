window.addEventListener("load", () => {
  setTimeout(() => {
    history.replaceState(null, "", "/portfolio.html");
    document.title = "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile";

    const container = document.querySelector<HTMLElement>(".container");
    if (container) container.remove();

    const iframe = document.querySelector<HTMLIFrameElement>(".portfolio-reveal");
    if (!iframe) return;

    iframe.style.pointerEvents = "auto";

    window.requestAnimationFrame(() => {
      iframe.contentWindow?.postMessage(
        { type: "portfolio:sync-projects-carousel" },
        window.location.origin,
      );
    });
  }, 3600);
});
