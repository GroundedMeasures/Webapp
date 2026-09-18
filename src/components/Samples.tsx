import { CUT_FILL_ROWS, SAMPLE_HEATMAP_IMAGE_URL, SURFACE_METRICS } from "../constants";
import Icon from "./Icon";

export default function Samples() {
  return (
    <section className="w-full bg-white border-y border-slate-200 py-14 lg:py-18" id="samples">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
              VERIFIABLE ENGINEERING STANDARDS
            </div>
            <h2 className="font-sans text-2xl lg:text-3xl font-extrabold text-civil-navy tracking-tight">
              Field-Tested Accuracy Out On The Jobsite
            </h2>
          </div>
          <p className="font-body text-slate-600 text-sm max-w-md">
            Sample model deliverables generated from actual grading plans. Every surface is bound checked against
            perimeter tie-ins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-sm">
            <div className="bg-civil-navy text-slate-300 px-4 py-2.5 border-b border-slate-800 flex justify-between items-center text-xs font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                AUTODESK CIVIL 3D 2024 • SURFACE VOLUMES
              </span>
              <span className="text-amber-400 font-semibold">TIN COMPOSITE</span>
            </div>
            <div className="relative bg-slate-950">
              <img
                alt="Civil 3D Earthwork Surface Map Heatmap"
                className="w-full h-auto object-cover"
                src={SAMPLE_HEATMAP_IMAGE_URL}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-800 bg-slate-900 border-t border-slate-800 text-center font-mono py-3 px-2">
              {SURFACE_METRICS.map((metric) => (
                <div key={metric.label} className="px-2">
                  <span className={`text-[10px] uppercase block font-semibold ${metric.colorClass}`}>
                    {metric.label}
                  </span>
                  <span className={`text-sm font-bold ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-300 shadow-xs overflow-hidden">
            <div className="bg-civil-navy text-white px-4 py-3 flex justify-between items-center">
              <div className="font-sans font-bold text-sm">Cut / Fill Station Elevation Sheet</div>
              <span className="font-mono text-[11px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                SUBGRADE CHECK
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 font-bold">STATION / ZONE</th>
                    <th className="py-2.5 px-3 font-bold text-right">EXIST</th>
                    <th className="py-2.5 px-3 font-bold text-right">PROP</th>
                    <th className="py-2.5 px-3 font-bold text-right">DIFF (FT)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {CUT_FILL_ROWS.map((row) => (
                    <tr key={row.zone} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-medium text-civil-navy">{row.zone}</td>
                      <td className="py-2 px-3 text-right">{row.exist}</td>
                      <td className="py-2 px-3 text-right">{row.prop}</td>
                      <td className="py-2 px-3 text-right">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded font-bold border ${
                            row.type === "cut"
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                          }`}
                        >
                          {row.diff}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 font-body text-xs text-slate-600 flex items-start gap-2">
              <Icon name="info" className="text-amber-600 text-[18px] shrink-0" />
              <span>
                <strong>Takeoff Note:</strong> Contours tied out clean at all boundary fence lines. Swale subgrade
                adjusted for 4" topsoil respread and aggregate bedding.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
