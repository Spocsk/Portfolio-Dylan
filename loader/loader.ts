window.addEventListener("load", () => {
  setTimeout(() => {
    history.replaceState(null, "", "/portfolio.html");
    document.title = "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile";

    const container = document.querySelector<HTMLElement>(".container");
    if (container) container.remove();

    const iframe = document.querySelector<HTMLIFrameElement>(".portfolio-reveal");
    if (iframe) iframe.style.pointerEvents = "auto";
  }, 3600);
});
