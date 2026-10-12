import { ShieldCheck, Eye, Leaf } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We aim to build systems that keep performing, and we stand behind our work.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Honest advice and clear communication at every stage of a project.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We believe in clean solar energy as a long-term choice for Nepal.",
  },
];

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Mechi Energy"
        subtitle="A Nepal-based solar energy company focused on solar PV and battery energy storage."
      />

      {/* COMPANY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-900 mb-5">Our Company</h2>
          <p className="text-brand-800/80 leading-relaxed mb-4">
            Mechi Energy Private Limited is a Nepal-based company working in
            solar energy. We focus on solar PV systems and battery energy
            storage, helping businesses and industry make use of clean,
            locally generated power.
          </p>
          <p className="text-brand-800/80 leading-relaxed">
            We aim to deliver every project with careful planning, quality
            workmanship and clear communication, from the first discussion
            through to completion.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-50 border-t border-brand-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-900 mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-brand-100 p-8">
                <div className="w-11 h-11 rounded-xl bg-brand-700 flex items-center justify-center text-white mb-5">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{v.title}</h3>
                <p className="text-brand-800/70 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}