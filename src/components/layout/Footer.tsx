import Link from "next/link";
import { services } from "@/data/services";
import { featuredCities } from "@/data/locations";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="container-default py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            {/* <li><Link href="/reviews">Reviews</Link></li> */}
            {/* <li><Link href="/case-studies">Case Studies</Link></li> */}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {services.map((s) => (
              <li key={s.slug}><Link href={s.href}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Locations</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {featuredCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/#service-areas`}>{c.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/#service-areas" className="inline-block mt-3 text-sm text-brand-yellow font-semibold">
            View All Locations
          </Link>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-default flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
