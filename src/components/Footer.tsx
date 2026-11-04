import { BRAND, CONTACT } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-civil-dark text-slate-300 border-t border-slate-800">
      <div className="mx-auto w-full px-6 lg:px-6 py-12 lg:py-14 max-w-[1480px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800">
          <div className="md:col-span-4 space-y-4">
            <div className="bg-white p-2 rounded-lg inline-block">
              <img
                alt={`${BRAND.name} Logo`}
                className="h-36 w-auto object-contain"
                src={BRAND.logoUrlDark}
              />
            </div>
            <span className="text-white text-sm font-bold uppercase block mb-3">
              Independent Civil 3D earthwork calculations and cut & fill
              quantity audits for site excavators, utility contractors, and
              estimators.
            </span>
            <div className="font-mono text-xs text-amber-400 space-y-1">
              <div>{CONTACT.region.toUpperCase()}</div>
              <div className="text-slate-300 font-semibold">
                {CONTACT.phoneDisplay} • bids@groundedmeasures.com
              </div>
            </div>
          </div>

          <div className="md:col-span-4 justify-self-end font-mono text-xs space-y-2.5">
            <span className="text-amber-400 font-bold uppercase tracking-wider block mb-3">
              SERVICES
            </span>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Independent civil 3D earthwork calculations, surface modeling, and
              cut & fill quantity audits for site excavators, utility
              contractors, and estimators nationwide.
            </p>
          </div>

          <div className="md:col-span-4 justify-self-end font-mono text-xs space-y-2.5">
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Quantities, heatmaps, and surface models provided by Grounded
              Measures, LLC are for preliminary estimating, bidding assistance,
              and bid-checking purposes only. Deliverables do not constitute
              stamped engineering or survey documents. Calculations depend
              directly on client-furnished plan sets. Excavation contractors are
              responsible for verifying field conditions, soil/rock boring
              reports, compaction parameters, and final construction plan
              revisions before site earthmoving begins.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.
            Precision Earthwork Estimating.
          </div>
          <div className="text-amber-400 font-semibold">
            CIVIL 3D TAKEOFFS • WESTERN PA &amp; NATIONWIDE
          </div>
        </div>
      </div>
    </footer>
  );
}
