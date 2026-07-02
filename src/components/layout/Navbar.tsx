"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { navigation, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop mega
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileSub(null);
  }, [pathname]);

  // Escape closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openWithIntent(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function closeWithIntent() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const activeItem = navigation.find((n) => n.label === openMenu);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-200", scrolled ? "bg-brand-yellow shadow-md" : "bg-brand-yellow")}>
      <div className="container-default flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-heading shrink-0">
          {site.name}
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden lg:block"
          onMouseLeave={closeWithIntent}
        >
          <nav className="flex items-center gap-1" aria-label="Primary">
            {navigation.map((item) => {
              const hasMenu = !!item.columns;
              const active = isActive(item.href);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && openWithIntent(item.label)}
                >
                  {hasMenu ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-heading transition-colors hover:bg-text-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                        active && "bg-text-hover"
                      )}
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      onFocus={() => openWithIntent(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        aria-hidden="true"
                        className={cn("transition-transform", openMenu === item.label && "rotate-180")}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm font-semibold text-heading transition-colors hover:bg-text-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                        active && "bg-text-hover"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mega panel */}
          <AnimatePresence>
            {activeItem?.columns && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute left-0 right-0 top-20 z-40"
                onMouseEnter={() => openWithIntent(activeItem.label)}
              >
                <div className="container-default">
                  <div className="ml-auto max-w-4xl rounded-b-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                    <MegaContent item={activeItem} isActive={isActive} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-heading hover:text-accent-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded">
            <Phone size={18} aria-hidden="true" />
            {site.phone}
          </a>
          <Button href="/contact" size="sm">Request a Free Quote</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 min-w-11 min-h-11 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white border-t border-border-light overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              <Button href="/contact" size="md" className="w-full mb-2">Request a Free Quote</Button>
              <a href={site.phoneHref} className="flex items-center gap-2 text-base font-semibold text-heading mb-4 min-h-11">
                <Phone size={18} aria-hidden="true" />
                {site.phone}
              </a>

              {navigation.map((item) => {
                const hasMenu = !!item.columns;
                if (!hasMenu) {
                  return (
                    <Link key={item.label} href={item.href} className="py-3 text-base font-semibold text-heading border-b border-border-light min-h-11">
                      {item.label}
                    </Link>
                  );
                }
                const expanded = mobileSub === item.label;
                return (
                  <div key={item.label} className="border-b border-border-light">
                    <button
                      className="w-full flex items-center justify-between py-3 text-base font-semibold text-heading min-h-11"
                      aria-expanded={expanded}
                      onClick={() => setMobileSub(expanded ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={18} aria-hidden="true" className={cn("transition-transform", expanded && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 grid grid-cols-2 gap-x-4 gap-y-1">
                            {item.columns!.flatMap((col) => col.links).map((link) => (
                              <Link key={link.label} href={link.href} className="py-2 text-sm text-body hover:text-accent-blue min-h-11 flex items-center">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaContent({ item, isActive }: { item: NavItem; isActive: (href: string) => boolean }) {
  const wide = item.variant === "wide";
  const allLinks = item.columns!.flatMap((c) => c.links);
  const withIcons = allLinks.some((l) => l.icon);

  // Location/industry style: dense multi-column link grid
  if (wide && !withIcons) {
    return (
      <div>
        {item.columns![0].heading && (
          <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-3">
            {item.columns![0].heading}
          </p>
        )}
        <div className="grid grid-cols-3 gap-x-6 gap-y-1">
          {allLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex items-center gap-2 py-2 text-sm text-body rounded-md hover:text-accent-blue min-h-11",
                isActive(link.href) && "text-accent-blue font-semibold"
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </div>
        {item.viewAll && <ViewAll href={item.viewAll.href} label={item.viewAll.label} />}
      </div>
    );
  }

  // Icon + description rows (Commercial Cleaning, Resources)
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {allLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-start gap-3 rounded-xl p-3 hover:bg-background-secondary transition-colors",
                isActive(link.href) && "bg-background-secondary"
              )}
            >
              {Icon && (
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-background-secondary text-accent-blue shrink-0">
                  <Icon size={20} aria-hidden="true" />
                </span>
              )}
              <span>
                <span className="block text-sm font-semibold text-heading">{link.label}</span>
                {link.description && (
                  <span className="block text-xs text-text-secondary mt-0.5 leading-snug">{link.description}</span>
                )}
              </span>
            </Link>
          );
        })}
      </div>
      {item.viewAll && <ViewAll href={item.viewAll.href} label={item.viewAll.label} />}
    </div>
  );
}

function ViewAll({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-4 pt-4 border-t border-border-light">
      <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2.5 transition-all">
        {label}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
