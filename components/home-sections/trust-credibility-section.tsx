import { Award, DollarSign, MapPin, CheckCircle } from "lucide-react";

const CITIES = [
  "Greater Noida", "Noida", "Lucknow", "Kanpur", "Varanasi", "Agra", "Ghaziabad", "Prayagraj", "Meerut", "Bareilly"
];

export function TrustCredibilitySection() {
  return (
    <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            TRUST & CREDIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Why Hundreds of Solar Buyers Trust GNX
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Certified equipment, transparent billing, and dedicated engineering installation teams on a Pan India Base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 w-fit">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Certified & Compliant</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All products meet strict BIS and MNRE quality standards and qualify for government subsidy schemes under PM Surya Ghar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">100% Transparent Pricing</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No hidden costs or surprise surcharges — see hardware cost, installation fees, and GST breakdown upfront before making a commitment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Installations Pan India Base</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Serving residential rooftop owners, commercial factories, and verified B2B vendors across major hubs on a Pan India Base.
            </p>
          </div>
        </div>

        {/* Cities Chip Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/40 border border-slate-800 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" /> Primary Service Hubs:
          </span>
          {CITIES.map((city, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
