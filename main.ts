export const projects = [
  {
    title: "2048 Swift Game",
    description:
      "Un clone du célèbre puzzle, écrit en Swift, animations fluides et logique personnalisée.",
    link: "https://github.com/tonprofil/2048-swift",
  },
  {
    title: "Progressive Running Planner (Web & iOS)",
    description:
      "Générateur de plans de course personnalisés lié à Apple Health et Bevel.",
    link: "https://github.com/tonprofil/running-planner",
  },
  {
    title: "Jenkins CI/CD Manager",
    description:
      "Gestionnaire d'automatisation des workflows CI/CD pour les apps web et mobiles.",
    link: "https://github.com/tonprofil/jenkins-manager",
  },
];

// // Interactive dots system
// interface Dot {
//   element: HTMLElement;
//   x: number;
//   y: number;
//   targetX: number;
//   targetY: number;
//   velocity: number;
// }

// const dots: Dot[] = [];
// let mouseX = 0;
// let mouseY = 0;
// const REPEL_DISTANCE = 400;
// const NUM_DOTS = 350;

// function createDots() {
//   const container = document.getElementById("dots-container");
//   if (!container) return;

//   for (let i = 0; i < NUM_DOTS; i++) {
//     const dot = document.createElement("div");
//     dot.className = "dot";
//     container.appendChild(dot);

//     dots.push({
//       element: dot,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * (container.clientHeight || 600),
//       targetX: Math.random() * window.innerWidth,
//       targetY: Math.random() * (container.clientHeight || 600),
//       velocity: Math.random() * 0.5 + 0.2,
//     });
//   }
// }

// function updateDots() {
//   dots.forEach((dot) => {
//     const dx = dot.targetX - dot.x;
//     const dy = dot.targetY - dot.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     // Move towards target
//     if (distance > 1) {
//       dot.x += (dx / distance) * dot.velocity;
//       dot.y += (dy / distance) * dot.velocity;
//     } else {
//       // New random target
//       dot.targetX = Math.random() * window.innerWidth;
//       dot.targetY = Math.random() * 600;
//     }

//     // Repel from mouse
//     const mouseDistX = dot.x - mouseX;
//     const mouseDistY = dot.y - mouseY;
//     const mouseDistance = Math.sqrt(
//       mouseDistX * mouseDistX + mouseDistY * mouseDistY
//     );

//     if (mouseDistance < REPEL_DISTANCE && mouseDistance > 0) {
//       const force = (REPEL_DISTANCE - mouseDistance) / REPEL_DISTANCE;
//       dot.x += (mouseDistX / mouseDistance) * force * 3;
//       dot.y += (mouseDistY / mouseDistance) * force * 3;
//     }

//     // Keep dots within bounds
//     const container = document.getElementById("dots-container");
//     if (container) {
//       if (dot.x < 0) dot.x = 0;
//       if (dot.x > window.innerWidth) dot.x = window.innerWidth;
//       if (dot.y < 0) dot.y = 0;
//       if (dot.y > container.clientHeight) dot.y = container.clientHeight;
//     }

//     dot.element.style.left = dot.x + "px";
//     dot.element.style.top = dot.y + "px";
//   });

//   requestAnimationFrame(updateDots);
// }

function createProjectCard(project: {
  title: string;
  description: string;
  link: string;
}) {
  const card = document.createElement("div");
  card.className = "project-card";

  const h3 = document.createElement("h3");
  h3.textContent = project.title;
  card.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = project.description;
  card.appendChild(p);

  const a = document.createElement("a");
  a.href = project.link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Découvrir";
  card.appendChild(a);

  return card;
}

export function renderProjects(containerId = "projects-list") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear any existing content
  container.innerHTML = "";

  for (const project of projects) {
    const card = createProjectCard(project);
    container.appendChild(card);
  }
}

if (typeof window !== "undefined") {

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      renderProjects();
    });
  } else {
    renderProjects();
  }
}
