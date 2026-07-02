import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { articles, getArticle } from "@/data/blog";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { title: article.title, description: article.excerpt, images: [article.image], type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "Swift Facility Cleaning" },
    publisher: { "@type": "Organization", name: "Swift Facility Cleaning" },
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.category },
        ]}
      />

      {/* Header */}
      <section className="bg-background-secondary">
        <div className="container-reading py-14 md:py-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-4">{article.category}</span>
          <h1 className="text-[2rem] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold text-heading">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5"><Calendar size={15} aria-hidden="true" /> {article.dateLabel}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} aria-hidden="true" /> {article.readMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container-content -mt-8 md:-mt-12 relative z-10">
        <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-xl ring-1 ring-black/5">
          <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width:1140px) 1140px, 100vw" className="object-cover" />
        </div>
      </div>

      {/* Body */}
      <article className="section-y pt-12 md:pt-16">
        <div className="container-reading">
          <div className="space-y-6 text-lg text-body leading-[1.7]">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="my-12 rounded-[20px] bg-heading text-white p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold">Need a reliable cleaning partner?</h2>
            <p className="mt-2 text-white/70">Request a free, no-obligation quote — we respond within one business day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-5 rounded-xl bg-brand-yellow px-6 h-12 font-semibold text-heading hover:bg-[#f0c12e] transition-colors">
              Request a Free Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {article.relatedServiceHref && (
            <p className="text-body">
              Related service:{" "}
              <Link href={article.relatedServiceHref} className="text-accent-blue font-semibold hover:underline">
                Explore this service →
              </Link>
            </p>
          )}

          <div className="mt-10 pt-8 border-t border-border-light">
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
              <ArrowLeft size={18} aria-hidden="true" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-y bg-background-secondary">
          <div className="container-default">
            <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-10">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.05}>
                  <Link href={`/blog/${a.slug}`} className="group flex flex-col h-full rounded-[20px] overflow-hidden bg-white border border-border-light hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={a.image} alt={a.imageAlt} fill loading="lazy" sizes="(min-width:640px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-accent-blue">{a.category}</span>
                      <h3 className="mt-2 font-semibold text-lg text-heading leading-snug group-hover:text-accent-blue transition-colors">{a.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner headline="Ready for a Cleaner, Healthier Facility?" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
