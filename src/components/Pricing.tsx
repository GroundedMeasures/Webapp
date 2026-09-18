import { CONTACT, PRICING_TIERS } from "../constants";
import Icon from "./Icon";

export default function Pricing() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-18" id="pricing">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 font-mono text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
          UPFRONT ESTIMATING FEES
        </div>
        <h2 className="font-sans text-2xl lg:text-3xl font-extrabold text-civil-navy tracking-tight">
          Transparent, Project-Based Flat Rates
        </h2>
        <p className="font-body text-slate-600 text-sm sm:text-base mt-2">
          No ambiguous hourly billings or monthly retainers. You know your takeoff expense upfront so you can build
          it directly into your bid package.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PRICING_TIERS.map((plan) => (
          <div
            key={plan.tier}
            className={
              plan.featured
                ? "bg-white rounded-xl border-2 border-amber-600 p-6 flex flex-col justify-between shadow-md relative"
                : "bg-white rounded-xl border border-slate-300 p-6 flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors"
            }
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white font-mono text-[11px] font-bold px-3 py-0.5 rounded shadow-xs uppercase tracking-wider">
                {plan.featuredBadge}
              </div>
            )}
            <div>
              <div className={`flex justify-between items-center pb-3 border-b border-slate-200 mb-4 ${plan.featured ? "mt-1" : ""}`}>
                <span className={`font-mono text-xs font-bold uppercase ${plan.featured ? "text-amber-700" : "text-slate-500"}`}>
                  {plan.tier}
                </span>
                <span
                  className={
                    plan.featured
                      ? "font-mono text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-semibold border border-amber-200"
                      : "font-mono text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold"
                  }
                >
                  {plan.sizeLabel}
                </span>
              </div>
              <h3 className="font-sans text-xl font-bold text-civil-navy">{plan.name}</h3>
              <p className="font-body text-xs text-slate-500 mt-1 mb-5">{plan.description}</p>
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-4xl font-extrabold text-civil-navy">{plan.price}</span>
                  <span className="font-mono text-xs text-slate-500 font-bold">{plan.priceUnit}</span>
                </div>
                <span
                  className={`font-mono text-[11px] font-semibold block mt-1 ${
                    plan.price === "Custom" ? "text-slate-600" : "text-emerald-700"
                  }`}
                >
                  {plan.turnaround}
                </span>
              </div>
              <ul className="space-y-2.5 font-body text-xs text-slate-700 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon name="check" className="text-emerald-600 text-[18px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className={
                plan.featured
                  ? "w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-sans text-xs font-bold text-center rounded-lg shadow-sm transition-colors"
                  : "w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-civil-navy font-sans text-xs font-bold text-center rounded-lg border border-slate-300 transition-colors"
              }
              href="#upload-desk"
            >
              {plan.ctaLabel}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 border border-slate-300 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-600 text-white font-mono text-[11px] font-bold px-2 py-0.5 rounded">
            RUSH SLA
          </span>
          <span className="font-body text-xs sm:text-sm text-slate-700">
            <strong>Tight bid deadline tomorrow morning?</strong> Expedited 24-hour delivery is available on
            request.
          </span>
        </div>
        <a
          className="font-mono text-xs text-amber-700 hover:text-amber-800 font-bold whitespace-nowrap"
          href={CONTACT.phoneHref}
        >
          Call {CONTACT.phoneDisplay} for Rush Confirmation →
        </a>
      </div>
    </section>
  );
}
