"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { primaryNav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200",
        scrolled ? "bg-brand-yellow shadow-md" : "bg-brand-yellow"
      )}
    >
      <div className="container-default flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-heading">
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-heading hover:bg-text-hover hover:px-3 hover:py-2 hover:rounded-3xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-heading hover:text-text-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
          >
            <Phone size={18} aria-hidden="true" />
            {site.phone}
          </a>
          <Button href="/contact" size="sm">
            Request a Free Quote
          </Button>
        </div>

        <button
          className="lg:hidden p-2 min-w-11 min-h-11 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border-light px-6 py-6 flex flex-col gap-2">
          <Button href="/contact" size="md" className="w-full mb-2">
            Request a Free Quote
          </Button>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-base font-semibold text-heading mb-4"
          >
            <Phone size={18} aria-hidden="true" />
            {site.phone}
          </a>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-base font-semibold text-heading border-b border-border-light min-h-11"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
