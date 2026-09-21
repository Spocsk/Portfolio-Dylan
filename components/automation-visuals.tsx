"use client";

import { useGSAP } from "@gsap/react";
import {
  ArrowClockwise,
  CalendarBlank,
  Check,
  ChatCircleDots,
  ClockCountdown,
  FilePdf,
  PaperPlaneTilt,
  Sparkle,
  Tray,
  UserCircle,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

import { trackUmami } from "../lib/analytics";
import type { Locale } from "../lib/i18n";
import { bindTimelineLifecycle, motionAllowed } from "../lib/motion";
import { getWorkflow, getWorkflows, type WorkflowScene } from "../lib/workflows";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function useBeatTimeline(root: RefObject<HTMLElement | null>, replayKey: string | number) {
  useGSAP(() => {
    if (!root.current || !motionAllowed()) return;
    const beats = root.current.querySelectorAll("[data-beat]");
    const timeline = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
    timeline.set(beats, { autoAlpha: 0, y: 16 });
    beats.forEach((beat, index) => {
      timeline.to(beat, { autoAlpha: 1, y: 0, duration: 0.48 }, index === 0 ? 0 : "+=0.32");
    });
    return bindTimelineLifecycle(timeline, root.current);
  }, { scope: root, dependencies: [replayKey] });
}

export function OperationsBoard({ locale = "fr" }: { locale?: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const [cycle, setCycle] = useState(0);
  const scene = getWorkflow(locale, "lead");
  useBeatTimeline(root, cycle);

  return (
    <div className="ops-board" ref={root} aria-label={scene.title}>
      <div className="ops-board-head">
        <div>
          <span className="ops-board-kicker">{scene.input}</span>
          <strong>{scene.inputDetail}</strong>
        </div>
        <div className="ops-board-meta">
          <span className="ops-disclosure">{scene.demoLabel} · {scene.fictive}</span>
          <button className="icon-button ops-replay" type="button" onClick={() => { setCycle((value) => value + 1); trackUmami("workflow_replay", { workflow: "hero_qualification", locale }); }} aria-label={scene.replay}>
            <ArrowClockwise aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="ops-board-body">
        <div className="ops-conversation">
          <div className="ops-message" data-beat>
            <span>{scene.inputDetail}</span>
            <p>{scene.beats.prospect}</p>
          </div>
          <div className="ops-message is-agent" data-beat>
            <span>{scene.steps[2]?.label}</span>
            <p>{scene.beats.agent}</p>
          </div>
          <div className="ops-message" data-beat>
            <span>{scene.inputDetail.split(" / ")[0]}</span>
            <p>{scene.beats.answer}</p>
          </div>
        </div>
        <div className="ops-output is-primary" data-beat>
          <div>
            <span>{scene.steps.find((step) => step.primary)?.label}</span>
            <strong>{scene.beats.need} · {scene.beats.rule}</strong>
          </div>
          <span className="ops-output-status"><i />{scene.beats.control}</span>
        </div>
      </div>
    </div>
  );
}

function SceneMeta({ scene }: { scene: WorkflowScene }) {
  return <div className="demo-meta"><span>{scene.demoLabel}</span><span>{scene.fictive}</span></div>;
}

function LeadVisual({ scene, replayKey }: { scene: WorkflowScene; replayKey: number }) {
  const root = useRef<HTMLDivElement>(null);
  useBeatTimeline(root, replayKey);
  return (
    <div className="demo-ui demo-chat" ref={root}>
      <div className="demo-topbar"><span><ChatCircleDots />{scene.input}</span><i>{scene.fictive}</i></div>
      <div className="demo-chat-grid">
        <div className="demo-thread">
          <div className="demo-bubble scene-beat" data-beat><b>{scene.inputDetail.split(" / ")[0]}</b><p>{scene.beats.prospect}</p></div>
          <div className="demo-bubble is-ai scene-beat" data-beat><b>{scene.steps[2]?.label}</b><p>{scene.beats.agent}</p></div>
          <div className="demo-bubble scene-beat" data-beat><b>{scene.inputDetail.split(" / ")[0]}</b><p>{scene.beats.answer}</p></div>
        </div>
        <div className="demo-record scene-beat is-primary" data-beat>
          <span className="demo-mini-label">{scene.steps.find((step) => step.primary)?.label}</span>
          <strong>{scene.inputDetail.split(" / ")[1]}</strong>
          <dl>
            <div><dt>{scene.steps[1]?.label}</dt><dd>{scene.beats.need}</dd></div>
            <div><dt>{scene.steps[0]?.label}</dt><dd>{scene.beats.rule}</dd></div>
            <div><dt>{scene.retained}</dt><dd>{scene.beats.control}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function FollowupVisual({ scene, replayKey }: { scene: WorkflowScene; replayKey: number }) {
  const root = useRef<HTMLDivElement>(null);
  useBeatTimeline(root, replayKey);
  const days = localeDays(scene);
  return (
    <div className="demo-ui demo-calendar" ref={root}>
      <div className="demo-topbar"><span><CalendarBlank />{scene.input}</span><i>{scene.beats.month}</i></div>
      <div className="calendar-strip" data-beat>
        {days.map((day) => <div key={day.date} className={day.className}><span>{day.label}</span><strong>{day.date}</strong>{day.className === "is-deadline" ? <em>{scene.beats.deadline}</em> : null}</div>)}
      </div>
      <div className="rule-row scene-beat" data-beat><ClockCountdown /><div><span>{scene.steps[1]?.label}</span><strong>{scene.beats.rule}</strong></div><Check /></div>
      <div className="approval-row scene-beat is-primary" data-beat>
        <div><span>{scene.steps[2]?.label}</span><p>{scene.beats.draft}</p></div>
        <div className="demo-action"><Check />{scene.beats.approved}</div>
      </div>
      <div className="scheduled-row scene-beat" data-beat><Check weight="bold" />{scene.beats.scheduled}</div>
    </div>
  );
}

function localeDays(scene: WorkflowScene) {
  const french = scene.beats.month.includes("sept");
  const labels = french ? ["L", "M", "M", "J", "V"] : ["M", "T", "W", "T", "F"];
  return [21, 22, 23, 24, 25].map((date, index) => ({
    date,
    label: labels[index],
    className: date === 22 ? "is-today" : date === 25 ? "is-deadline" : "",
  }));
}

function SynthesisVisual({ scene, replayKey }: { scene: WorkflowScene; replayKey: number }) {
  const root = useRef<HTMLDivElement>(null);
  useBeatTimeline(root, replayKey);
  return (
    <div className="demo-ui demo-synthesis" ref={root}>
      <div className="demo-topbar"><span><Sparkle />{scene.input}</span><i>{scene.inputDetail}</i></div>
      <div className="source-stack" data-beat>
        <div><Tray /><span>Email</span><b>{scene.beats.email}</b></div>
        <div><FilePdf /><span>PDF</span><b>{scene.beats.pdf}</b></div>
        <div><UserCircle /><span>CRM</span><b>{scene.beats.crm}</b></div>
      </div>
      <div className="synthesis-card scene-beat" data-beat><span className="demo-mini-label">{scene.steps[1]?.label}</span><p>{scene.beats.summary}</p></div>
      <div className="task-list scene-beat is-primary" data-beat>
        <div><i>01</i><span>{scene.beats.task1}</span><em>{scene.beats.review}</em></div>
        <div><i>02</i><span>{scene.beats.task2}</span><em>{scene.beats.review}</em></div>
      </div>
    </div>
  );
}

const visuals = { lead: LeadVisual, followup: FollowupVisual, synthesis: SynthesisVisual };

function DesktopWorkflowCanvas({ scene, replayKey }: { scene: WorkflowScene; replayKey: string | number }) {
  const root = useRef<HTMLDivElement>(null);
  useBeatTimeline(root, replayKey);
  const Icon = scene.id === "lead" ? ChatCircleDots : scene.id === "followup" ? CalendarBlank : Tray;
  return (
    <div className="desktop-workflow" ref={root}>
      <div className="desktop-workflow-head">
        <span>{scene.input}</span>
        <span>{scene.steps[1]?.label}</span>
        <span>{scene.output}</span>
      </div>
      <div className="desktop-workflow-grid">
        <div className="desktop-source" data-beat>
          <Icon weight="duotone" />
          <span>{scene.input}</span>
          <strong>{scene.inputDetail}</strong>
        </div>
        <div className="desktop-pipeline">
          {scene.steps.map((step, index) => (
            <div key={step.id} data-beat className={step.primary ? "is-final is-primary" : ""}>
              <span>0{index + 1}</span>
              <div><strong>{step.label}</strong><small>{step.detail}</small></div>
              {index < scene.steps.length - 1 ? <Check /> : <ClockCountdown />}
            </div>
          ))}
        </div>
        <div className="desktop-destination is-primary" data-beat>
          <PaperPlaneTilt weight="duotone" />
          <span>{scene.output}</span>
          <strong>{scene.outputDetail}</strong>
          <p>{scene.steps.find((step) => step.primary)?.detail}</p>
          <em><Check />{scene.retained}</em>
        </div>
      </div>
    </div>
  );
}

export function WorkflowShowcase({ locale = "fr" }: { locale?: Locale }) {
  const root = useRef<HTMLElement>(null);
  const scenes = getWorkflows(locale);
  const [active, setActive] = useState(scenes[0]?.id ?? "lead");
  const [replayKey, setReplayKey] = useState(0);
  const scene = scenes.find((item) => item.id === active) ?? scenes[0];

  useGSAP(() => {
    if (!root.current || !motionAllowed()) return;
    const narrow = window.matchMedia("(max-width: 760px)").matches;
    const triggers = gsap.utils.toArray<HTMLElement>("[data-workflow-chapter]").map((chapter) =>
      ScrollTrigger.create({
        trigger: chapter,
        start: "top 48%",
        end: "bottom 48%",
        onEnter: () => setActive((chapter.dataset.workflowChapter || "lead") as WorkflowScene["id"]),
        onEnterBack: () => setActive((chapter.dataset.workflowChapter || "lead") as WorkflowScene["id"]),
      }),
    );
    const pin = narrow
      ? null
      : ScrollTrigger.create({
          trigger: "[data-workflow-column]",
          start: "top 72px",
          end: "bottom bottom",
          pin: "[data-workflow-stage]",
          pinSpacing: false,
          anticipatePin: 1,
        });
    return () => {
      triggers.forEach((trigger) => trigger.kill());
      pin?.kill();
    };
  }, { scope: root });

  const seen = useRef(active);
  useEffect(() => {
    if (seen.current === active) return;
    seen.current = active;
    trackUmami("workflow_chapter", { workflow: active, locale });
  }, [active, locale]);

  const replay = useCallback(() => {
    setReplayKey((value) => value + 1);
    trackUmami("workflow_replay", { workflow: active, locale });
  }, [active, locale]);

  if (!scene) return null;

  return (
    <section className="workflow-showcase" ref={root}>
      <div className="workflow-copy-column">
        {scenes.map((item) => {
          const MobileVisual = visuals[item.id];
          return (
            <article key={item.id} className={`workflow-chapter${active === item.id ? " is-active" : ""}`} data-workflow-chapter={item.id}>
              <span>{item.kicker}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="workflow-mobile-visual">
                <SceneMeta scene={item} />
                <MobileVisual scene={item} replayKey={replayKey} />
                <button type="button" className="replay-button" onClick={replay}><ArrowClockwise />{item.replay}</button>
              </div>
            </article>
          );
        })}
      </div>
      <div className="workflow-pin-column" data-workflow-column>
        <div className="workflow-stage" data-workflow-stage aria-live="polite">
          <SceneMeta scene={scene} />
          <DesktopWorkflowCanvas scene={scene} replayKey={`${active}-${replayKey}`} />
          <button type="button" className="replay-button" onClick={replay}><ArrowClockwise />{scene.replay}</button>
        </div>
      </div>
    </section>
  );
}
