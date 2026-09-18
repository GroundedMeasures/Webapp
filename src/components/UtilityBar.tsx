import { CONTACT } from "../constants";

export default function UtilityBar() {
  return (
    <div className="bg-civil-navy text-slate-300 text-xs py-1.5 border-b border-slate-800 px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Estimator Desk Open: {CONTACT.hours}
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Civil 3D 2024 • Carlson • AGTEK Compatible</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">Direct Estimator Line:</span>
          <a
            className="text-amber-400 hover:text-amber-300 font-semibold tracking-wide transition-colors"
            href={CONTACT.phoneHref}
          >
            {CONTACT.phoneDisplay}
          </a>
          <span className="text-slate-500">|</span>
          <a className="text-slate-300 hover:text-white transition-colors" href={CONTACT.emailHref}>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
