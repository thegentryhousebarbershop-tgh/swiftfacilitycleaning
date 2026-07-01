"use client";

import { useState } from "react";
import { services } from "@/data/services";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  }

  if (status === "success") {
    return (
      <div className="bg-background-secondary rounded-[20px] p-8 text-center">
        <h3 className="text-xl font-semibold text-heading">Thank you!</h3>
        <p className="mt-2 text-body">
          We&apos;ve received your request and will respond within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full h-14 rounded-[14px] border border-border px-4 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a free quote">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-heading mb-2">
            First Name
          </label>
          <input id="firstName" name="firstName" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-heading mb-2">
            Last Name
          </label>
          <input id="lastName" name="lastName" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-semibold text-heading mb-2">
          Business Name
        </label>
        <input id="businessName" name="businessName" className={inputClass} />
      </div>

      <div>
        <label htmlFor="businessAddress" className="block text-sm font-semibold text-heading mb-2">
          Business Address
        </label>
        <input id="businessAddress" name="businessAddress" required className={inputClass} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-heading mb-2">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-heading mb-2">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-heading mb-2">
          Service Interested In
        </label>
        <select id="service" name="service" className={inputClass}>
          <option value="">Not Sure / General Inquiry</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-heading mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your facility and cleaning needs."
          className="w-full rounded-[14px] border border-border p-4 text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-14 rounded-xl bg-brand-yellow text-heading font-semibold hover:bg-[#f0c12e] transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Quote"}
      </button>
      <p className="text-sm text-text-secondary text-center">
        No obligation. No spam. We respond within 1 business day.
      </p>
    </form>
  );
}
