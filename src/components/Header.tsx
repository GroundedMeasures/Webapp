import { BRAND, CONTACT, NAV_LINKS } from "../constants";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="flex justify-between items-center w-full px-6 lg:px-8 py-3 max-w-[1280px] mx-auto">
        <a className="flex items-center gap-3 transition-opacity hover:opacity-90" href="#">
          <img alt={`${BRAND.name} Logo`} className="h-11 w-auto object-contain" src={BRAND.logoUrl} />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="hover:text-civil-navy hover:underline underline-offset-4 decoration-amber-500 transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-3 py-2 rounded-lg border border-slate-300 transition-colors"
            href={CONTACT.phoneHref}
          >
            <Icon name="call" className="text-[17px] text-amber-600" />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
          <a
            className="inline-flex items-center gap-2 bg-civil-navy hover:bg-slate-900 text-white font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg border border-civil-navy shadow-sm transition-all"
            href="#upload-desk"
          >
            <Icon name="upload_file" className="text-[18px] text-amber-400" />
            <span>Upload Plans for Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
}
