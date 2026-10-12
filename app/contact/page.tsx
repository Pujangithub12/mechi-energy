"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const details = [
  { icon: MapPin, label: "Office", value: "Trade Tower, Thapathali, Kathmandu, Nepal" },
  { icon: Mail, label: "Email", value: "mechienergy24@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977-9842787091" },
  { icon: Clock, label: "Hours", value: "[Sunday - Friday, 10:00 - 5:00]" },
];

const inputClass =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Send us a message and we will respond as soon as we can."
      />

      <section className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          {/* DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white shrink-0">
                  <d.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {d.label}
                  </p>
                  <p className="text-sm text-brand-900 mt-0.5">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM / SUCCESS MESSAGE */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-100 p-8">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-900 mb-2">Message sent</h3>
                <p className="text-brand-800/70 text-sm mb-6">
                  Thank you for contacting us. We will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="name" required placeholder="Full name" className={inputClass} />
                  <input name="email" type="email" required placeholder="Email" className={inputClass} />
                </div>
                <input name="phone" type="tel" placeholder="Phone (optional)" className={inputClass} />
                <textarea name="message" required rows={6} placeholder="Your message" className={inputClass} />
                <button
                  type="submit"
                  className="bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}