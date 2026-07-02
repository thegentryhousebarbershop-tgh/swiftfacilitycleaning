"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { articles, blogCategories } from "@/data/blog";
import { cn } from "@/lib/utils";

export function BlogIndexView() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? articles : articles.filter((a) => a.category === category);
  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Blog categories">
        {blogCategories.map((cat) => {
          const isActive = cat === category;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                isActive ? "bg-accent-blue text-white" : "bg-white text-heading border border-border hover:border-accent-blue"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {featured && (
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 items-center rounded-[24px] overflow-hidden bg-white border border-border-light shadow-sm hover:shadow-lg transition-shadow mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden">
              <Image src={featured.image} alt={featured.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-heading">Featured</span>
            </div>
            <div className="p-8 lg:pr-12">
              <div className="flex items-center gap-3 text-xs text-text-secondary">
                <span className="font-semibold text-accent-blue">{featured.category}</span>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1"><Clock size={13} aria-hidden="true" /> {featured.readMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-heading leading-snug group-hover:text-accent-blue transition-colors">{featured.title}</h2>
              <p className="mt-3 text-body leading-relaxed">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
                Read Article <ArrowRight size={16} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      )}

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col h-full rounded-[20px] overflow-hidden bg-white border border-border-light hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={article.image} alt={article.imageAlt} fill loading="lazy" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-heading">{article.category}</span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary"><Clock size={13} aria-hidden="true" /> {article.readMinutes} min read</div>
                  <h3 className="mt-3 font-semibold text-lg text-heading leading-snug group-hover:text-accent-blue transition-colors">{article.title}</h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">Read Article <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
