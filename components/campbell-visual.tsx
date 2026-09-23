import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "../lib/i18n";

export default function CampbellVisual({ locale }: { locale: Locale }) {
  const labels = locale === "fr"
    ? { concept: "Schéma conceptuel", source: "Terrain", flow: "Flux de données", interface: "Interface web", caption: "Acquisition de données · applications industrielles" }
    : { concept: "Conceptual diagram", source: "Field", flow: "Data stream", interface: "Web interface", caption: "Data acquisition · industrial applications" };

  return (
    <div className="campbell-visual" role="img" aria-label={`${labels.concept} : ${labels.source}, ${labels.flow}, ${labels.interface}`}>
      <div className="campbell-visual-top">
        <span className="campbell-visual-mark" aria-hidden="true"><i /><i /><i /></span>
        <span>Campbell Scientific</span>
        <small>{labels.concept}</small>
      </div>
      <div className="campbell-visual-plot" aria-hidden="true">
        <svg viewBox="0 0 560 280" preserveAspectRatio="none">
          <path className="campbell-grid-line" d="M0 56H560M0 112H560M0 168H560M0 224H560M112 0V280M224 0V280M336 0V280M448 0V280" />
          <path className="campbell-wave campbell-wave-muted" d="M0 190 C40 190 52 169 86 169 S132 207 165 207 S218 126 256 126 S301 158 340 158 S391 90 431 90 S493 126 560 96" />
          <path className="campbell-wave campbell-wave-secondary" d="M0 160 C42 160 53 188 90 188 S143 146 181 146 S228 176 267 176 S311 99 350 99 S404 140 440 140 S514 68 560 68" />
          <path className="campbell-wave campbell-wave-primary" d="M0 219 C34 219 55 198 90 198 S135 119 174 119 S218 151 257 151 S303 73 344 73 S392 113 433 113 S501 40 560 40" />
          <circle className="campbell-point" cx="344" cy="73" r="5" />
          <circle className="campbell-point" cx="433" cy="113" r="5" />
        </svg>
      </div>
      <div className="campbell-visual-bottom">
        <div className="campbell-visual-flow"><span>{labels.source}</span><ArrowRight aria-hidden="true" /><span>{labels.flow}</span><ArrowRight aria-hidden="true" /><span>{labels.interface}</span></div>
        <small>{labels.caption}</small>
      </div>
    </div>
  );
}
