import { BRAND, CONTACT, FOOTER_LINKS } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-civil-dark text-slate-300 border-t border-slate-800">
      <div className="w-full px-6 lg:px-8 py-12 lg:py-14 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-2 rounded-lg inline-block">
              <img alt={`${BRAND.name} Logo`} className="h-8 w-auto object-contain" src={BRAND.logoUrlDark} />
            </div>
            <p className="font-body text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Independent civil 3D earthwork calculations, surface modeling, and cut-and-fill quantity audits for
              site excavators, utility contractors, and estimators nationwide.
            </p>
            <div className="font-mono text-xs text-amber-400 space-y-1">
              <div>{CONTACT.region.toUpperCase()}</div>
              <div className="text-slate-300 font-semibold">
                {CONTACT.phoneDisplay} • {CONTACT.email.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 font-mono text-xs space-y-2.5">
            <span className="text-amber-400 font-bold uppercase tracking-wider block mb-3">
              SERVICES &amp; STANDARDS
            </span>
            <ul className="space-y-2 text-slate-400">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-amber-400 transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 bg-white/5 rounded-xl p-4 border border-white/10 font-body text-xs text-slate-400 leading-relaxed">
            <span className="font-mono text-[11px] text-amber-400 font-bold uppercase tracking-wider block mb-1.5">
              PROFESSIONAL DISCLAIMER
            </span>
            Grounded Measures, LLC provides technical earthwork quantity takeoffs and CAD surface volume
            calculations for bidding and estimating preparation. Actual field conditions, rock classifications,
            soil borings, and final engineer-of-record plan revisions must be verified prior to construction lock.
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-slate-500">
          <div>© {BRAND.copyrightYear} {BRAND.name}. All Rights Reserved. Precision Earthwork Estimating.</div>
          <div className="text-amber-400 font-semibold">CIVIL 3D TAKEOFFS • WESTERN PA &amp; NATIONWIDE</div>
        </div>
      </div>
    </footer>
  );
}
