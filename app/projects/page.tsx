import { ImageIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// Add more projects by copying an entry below.
// `image`: put the photo in /public 
const projects = [
  {
    title:
      "Ghorahi Cement Captive Solar PV Project (3 MWp) with Battery Energy Storage System (BESS) (6 MWh)",
    desc: "",
    image: "",
  },
];

export default function Projects() {
  return (
    <div>
      <PageHeader title="Our Projects" 
        subtitle="A look at the solar and energy storage projects we are involved in."
      />

      <section className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-brand-100 overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all"
            >
              <div className="aspect-[16/10] bg-brand-100 border-b border-brand-200 flex flex-col items-center justify-center text-brand-500 text-sm gap-2">
                {p.image ? (
                  
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8" />
                    Project photo
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-900 leading-snug">{p.title}</h3>
                {p.desc && (
                  <p className="text-brand-800/70 text-sm leading-relaxed mt-2">{p.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}