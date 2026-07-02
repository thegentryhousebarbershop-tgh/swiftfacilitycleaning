import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { articles } from "@/data/blog";

export function LatestArticles() {
  return (
    <section className="section-y bg-background-secondary">
      <div className="container-default">
        <SectionHeader
          eyebrow="Resources"
          title="Guides for Facility Managers"
          description="Practical advice on keeping commercial spaces clean, healthy, and compliant."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col h-full rounded-[20px] overflow-hidden bg-white border border-border-light hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-heading">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                    <Clock size={13} aria-hidden="true" />
                    {article.readMinutes} min read
                  </div>
                  <h3 className="mt-3 font-semibold text-lg text-heading leading-snug group-hover:text-accent-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-accent-blue font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read Article
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/blog" variant="ghost">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
