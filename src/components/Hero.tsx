import { HERO_INFO_CARDS, HERO_TRUST_BADGES } from "../constants";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-8 lg:py-12" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-slate-300 rounded-md font-mono text-xs font-semibold text-slate-700 shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Civil 3D Modeling • Nationwide Earthwork Takeoffs</span>
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-civil-navy tracking-tight leading-[1.18]">
              Civil 3D Earthwork Takeoffs &amp; Contractor Bid Checks
            </h1>
            <p className="font-body text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mt-2.5">
              Fast, verified cut-and-fill volume audits for excavation contractors and site developers. Bid with
              complete confidence—without expensive in-house CAD overhead.
            </p>
          </div>
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-sans text-sm font-bold rounded-lg shadow-sm transition-all"
                href="#upload-desk"
              >
                <Icon name="upload_file" className="text-[19px]" />
                <span>Upload Plans for Quick Quote</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-civil-navy font-sans text-sm font-semibold rounded-lg border border-slate-300 shadow-xs transition-all"
                href="#samples"
              >
                <Icon name="visibility" className="text-[19px] text-slate-500" />
                <span>Inspect Sample Heatmap</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-5 text-slate-600 font-mono text-xs pt-1">
              {HERO_TRUST_BADGES.map((badge) => (
                <span key={badge.label} className="inline-flex items-center gap-1.5">
                  <Icon name={badge.icon} className="text-emerald-600 text-[17px]" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-3" id="services">
          {HERO_INFO_CARDS.map((card) => (
            <div
              key={card.title}
              className={`bg-white border-l-4 ${card.accentClass} border-y border-r border-slate-200 rounded-lg p-3.5 shadow-xs flex items-center justify-between gap-3`}
            >
              <div className="space-y-0.5">
                <div className={`font-mono text-[11px] font-bold uppercase tracking-wider ${card.labelClass}`}>
                  {card.label}
                </div>
                <div className="font-sans text-sm sm:text-base font-bold text-civil-navy">{card.title}</div>
                <p className="font-body text-xs text-slate-500">{card.description}</p>
              </div>
              <span
                className={`font-mono text-[11px] ${card.badgeClass} border px-2 py-1 rounded font-semibold shrink-0 text-center`}
              >
                {card.badge}
                {card.badgeSubtext && (
                  <>
                    <br />
                    <span className="text-[9px] uppercase text-amber-700">{card.badgeSubtext}</span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
