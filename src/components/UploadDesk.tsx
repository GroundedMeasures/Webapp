import type { FormEvent } from "react";
import { CONTACT, INTAKE_CHECKLIST } from "../constants";
import Icon from "./Icon";

export default function UploadDesk() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(
      "Plans received! Our estimating desk will review your scope and email your flat-rate proposal within 2-4 hours."
    );
  }

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-18" id="upload-desk">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-50 border border-amber-200 font-mono text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
              FILE UPLOAD DESK
            </div>
            <h2 className="font-sans text-2xl lg:text-3xl font-extrabold text-civil-navy tracking-tight">
              Submit Your Plans for an Upfront Quote
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Drop your civil plan set (PDF or CAD). We will evaluate the sheet count, check the site acreage, and
              return a fixed-price proposal within 2–4 hours during business days.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-300 p-5 space-y-4">
            {INTAKE_CHECKLIST.map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0 text-slate-700 font-mono font-bold text-xs">
                  {item.step}
                </div>
                <div>
                  <strong className="font-sans text-xs font-bold text-civil-navy block">{item.title}</strong>
                  <span className="font-body text-xs text-slate-600">{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-civil-navy text-white p-5 rounded-xl border border-slate-800">
            <span className="font-mono text-[11px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
              CALL FOR IMMEDIATE TURNAROUND
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1">
              <a
                className="font-mono text-xl font-bold text-white hover:text-amber-400 transition-colors"
                href={CONTACT.phoneHref}
              >
                {CONTACT.phoneDisplay}
              </a>
              <span className="text-xs font-mono text-slate-300">Estimator On Duty</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-300 shadow-sm p-6 sm:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                  Contractor / Firm Name *
                </label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                  placeholder="e.g. Keystone Excavating & Site LLC"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                  Contact Person Name *
                </label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                  placeholder="e.g. Marcus Vance, Chief Estimator"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">Phone Number *</label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                  placeholder="(724) 555-0192"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                  Email for Quote Delivery *
                </label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                  placeholder="bids@keystone-site.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                  Project Name &amp; Location *
                </label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                  placeholder="Route 19 Commercial Pad, Cranberry PA"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold text-civil-navy mb-1">Bid Due Date *</label>
                <input
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  required
                  type="date"
                />
              </div>
            </div>
            <div>
              <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                Upload Plan Files (Grading, Existing, Utility Sheets) *
              </label>
              <div className="border-2 border-dashed border-slate-300 hover:border-amber-600 bg-slate-50 hover:bg-white p-6 rounded-xl text-center transition-all cursor-pointer relative group">
                <input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" multiple type="file" />
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-amber-600 mb-2 group-hover:scale-105 transition-transform">
                    <Icon name="cloud_upload" className="text-[24px]" />
                  </div>
                  <p className="font-sans text-xs font-bold text-civil-navy">
                    Drag &amp; drop plan files here or <span className="text-amber-700 underline">Browse Local Files</span>
                  </p>
                  <p className="font-mono text-[11px] text-slate-500 mt-1">
                    Supports .PDF, .DWG, .DXF, .KMZ, or .LandXML (up to 75MB per upload)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="block font-sans text-xs font-bold text-civil-navy mb-1">
                Specific Scope Instructions / Notes (Optional)
              </label>
              <textarea
                className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-400"
                placeholder="e.g. Please isolate building pad cut/fill from parking lot subgrade, deduct 6 inches of topsoil strip, and calculate storm trench LF."
                rows={3}
              />
            </div>
            <button
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-sans text-sm font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
              type="submit"
            >
              <Icon name="send" className="text-[18px]" />
              <span>Submit Plans for Formal 2-4 Hr Quote</span>
            </button>
            <div className="text-center pt-1 font-mono text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <Icon name="lock" className="text-emerald-600 text-[16px]" />
              Files are strictly confidential and encrypted under standard contractor NDA.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
