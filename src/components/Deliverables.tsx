import { DELIVERABLES } from "../constants";
import Icon from "./Icon";

export default function Deliverables() {
  return (
    <section
      className="w-full bg-white border-y border-slate-200 py-14 lg:py-18"
      id="deliverables"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              STANDARD CONTRACTOR PACKAGE
            </div>
            <h2 className="font-sans text-2xl lg:text-3xl font-extrabold text-civil-navy tracking-tight">
              What You Receive In Every Earthwork Takeoff
            </h2>
          </div>
          <p className="font-body text-slate-600 text-sm max-w-md">
            Delivered in clean, format-compatible files designed to drop
            directly into your estimating spreadsheets and Trimble / Topcon
            rover controllers.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-200 shadow-xs">
          {DELIVERABLES.map((item) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${item.iconWrapClass}`}
              >
                <Icon name={item.icon} className="text-[22px]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans text-base font-bold text-civil-navy">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        {/* <div className="mt-6 bg-civil-navy text-white rounded-xl border border-slate-800 p-5 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
              <Icon name="precision_manufacturing" className="text-[22px]" />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                ADDITIONAL SCOPES &amp; GPS MODELING
              </div>
              <p className="font-body text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Need specialty scopes like topsoil stripping, utility trench excavation, curb/pavement subgrade, or
                3D TIN (.LandXML) machine control surfaces? We tailor any takeoff to your exact bid requirements.
              </p>
            </div>
          </div>
          <a
            href="#upload-desk"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <Icon name="add_circle" className="text-[18px]" />
            <span>Add Specialty Scopes to Bid</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
