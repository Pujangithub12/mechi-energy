import Link from "next/link";
import { ArrowRight, BatteryCharging, ClipboardList, Sun } from "lucide-react";

const highlights = [
  {
    icon: ClipboardList,
    title: "Planning & Design",
    desc: "Site assessment and solar system design matched to your energy needs.",
  },
  {
    icon: Sun,
    title: "Solar PV Projects",
    desc: "Solar PV systems delivered with careful installation and testing.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    desc: "Battery energy storage systems (BESS) to pair with solar and keep power available.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-brand-300 mb-6">
            <span className="w-8 h-[2px] bg-accent" />
            Mechi Energy Private Limited
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-3xl">
            Solar energy solutions,{" "}
            <span className="font-semibold text-brand-300">built for Nepal.</span>
          </h1>
          <p className="text-brand-100/80 text-base md:text-lg max-w-xl leading-relaxed mt-6">
            We work on solar PV and battery energy storage projects for
            businesses and industry.
          </p>
          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/contact"
              className="bg-white text-brand-900 text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-50 transition-colors inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="border border-brand-400/60 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-900 mb-12">
          Solar, planned and delivered carefully.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-brand-100 p-8 hover:shadow-lg hover:border-brand-200 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-5">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{item.title}</h3>
              <p className="text-brand-800/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-brand-800 text-white rounded-3xl p-10 md:p-14">
          <h3 className="text-2xl md:text-4xl font-light tracking-tight">
            Planning a <span className="font-semibold text-brand-300">solar project?</span>
          </h3>
          <p className="text-brand-100/80 text-sm md:text-base max-w-lg mt-4 leading-relaxed">
            Tell us what you have in mind and we will get back to you with the next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 bg-white text-brand-900 text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-50 transition-colors inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}