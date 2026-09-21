type ControllableTimeline = {
  pause: () => void;
  play: () => void;
  kill: () => void;
};

export function motionAllowed() {
  return typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function bindTimelineLifecycle(timeline: ControllableTimeline, target: Element) {
  let inView = false;
  const sync = () => {
    if (document.hidden || !inView) timeline.pause();
    else timeline.play();
  };
  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      sync();
    },
    { threshold: 0.2 },
  );
  observer.observe(target);
  document.addEventListener("visibilitychange", sync);
  return () => {
    observer.disconnect();
    document.removeEventListener("visibilitychange", sync);
    timeline.kill();
  };
}
