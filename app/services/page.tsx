import { BatteryCharging, ClipboardList, Sun, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Edit this list to match exactly what Mechi Energy offers.
const services = [
  {
    icon: ClipboardList,
    title: "Feasibility & Design",
    desc: "Site assessment and design of solar PV systems based on your energy needs.",
  },
  {
    icon: Sun,
    title: "Solar PV Projects",
    desc: "Captive and rooftop solar PV projects for businesses and industry.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage",
    desc: "Battery storage systems combined with solar to improve reliability and use of generated power.",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    desc: "Monitoring and maintenance to keep solar systems performing well.",
  },
];

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Solar PV and battery energy storage solutions, from planning to long-term support."
/>
    
      <section className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white border border-brand-100 p-8 hover:shadow-lg hover:border-brand-300 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-700 flex items-center justify-center text-white mb-5">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">{s.title}</h3>
              <p className="text-brand-800/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}