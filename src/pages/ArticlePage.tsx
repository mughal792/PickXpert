import React, { useState } from 'react';
import {
  ShieldCheck,
  Share2,
  Bookmark,
  CheckCircle2,
  ArrowDown,
  Sparkles,
  Info,
} from 'lucide-react';
import { getArticleBySlug, getArticlesByCategory, getCategoryBySlug } from '../data/articles';
import { Link } from '../router';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { ProductPickCard } from '../components/article/ProductPickCard';
import { ProsConsBox } from '../components/article/ProsConsBox';
import { ComparisonTable } from '../components/article/ComparisonTable';
import { TableOfContents } from '../components/article/TableOfContents';
import { ArticleCard } from '../components/article/ArticleCard';
import { useBookmarks } from '../context/BookmarkContext';
import { NotFoundPage } from './NotFoundPage';

export interface ArticlePageProps {
  categorySlug: string;
  articleSlug: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ categorySlug, articleSlug }) => {
  const article = getArticleBySlug(categorySlug, articleSlug);
  const category = getCategoryBySlug(categorySlug);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [copiedShare, setCopiedShare] = useState(false);

  if (!article || !category) {
    return <NotFoundPage requestedPath={`/${categorySlug}/${articleSlug}`} />;
  }

  const bookmarked = isBookmarked(article.id);
  const relatedArticles = getArticlesByCategory(categorySlug)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const scrollToTopPick = () => {
    const topPickEl = document.getElementById(`product-${article.topPicks[0]?.id}`);
    if (topPickEl) {
      topPickEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="pb-24 bg-white">
      {/* 1. ARTICLE HEADER SECTION */}
      <header className="bg-white border-b border-[#E5E5E5] pt-8 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: article.categoryName, href: `/${article.category}` },
              { label: article.title },
            ]}
            className="mb-6"
          />

          {/* Department & Testing Metric Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Link href={`/${article.category}`}>
              <Badge variant="category" size="sm">
                {article.categoryName}
              </Badge>
            </Link>
            <Badge variant="accent" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Lab & Field Tested
            </Badge>
            <span className="text-xs text-[#666666]">
              {article.testingHours} hours of testing • {article.productsTestedCount} models evaluated
            </span>
          </div>

          {/* Editorial Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#1A1A1A] leading-tight tracking-tight mb-4">
            {article.title}
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-6 font-normal">
            {article.subtitle}
          </p>

          {/* Author Byline & Action Bar */}
          <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Author Byline */}
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-[#E5E5E5]"
              />
              <div>
                <span className="font-bold text-[#1A1A1A] text-sm block">
                  By {article.author.name}
                </span>
                <div className="flex items-center gap-2 text-xs text-[#666666] mt-0.5">
                  <span>{article.author.role}</span>
                  <span>•</span>
                  <span>Updated {article.updatedAt}</span>
                </div>
              </div>
            </div>

            {/* Utility Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollToTopPick}
                className="px-3.5 py-2 rounded-lg bg-[#1F4747] hover:bg-[#173636] active:bg-[#122929] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Jump to Top Pick</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => toggleBookmark(article.id)}
                className={`p-2 rounded-lg border transition-colors ${
                  bookmarked
                    ? 'bg-white border-[#1F4747] text-[#1F4747]'
                    : 'bg-[#F7F7F7] border-[#E5E5E5] text-[#1A1A1A] hover:bg-[#E5E5E5]'
                }`}
                title={bookmarked ? 'Remove bookmark' : 'Save for later'}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#1F4747]' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-[#F7F7F7] border border-[#E5E5E5] text-[#1A1A1A] hover:bg-[#E5E5E5] transition-colors relative"
                title="Copy share link"
              >
                <Share2 className="w-4 h-4" />
                {copiedShare && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1F4747] text-white text-[10px] rounded shadow-md whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO IMAGE & CAPTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        <div className="rounded-2xl overflow-hidden bg-[#F7F7F7] border border-[#E5E5E5] aspect-16/9 relative shadow-xs">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        {article.coverImageCaption && (
          <figcaption className="text-xs text-[#666666] mt-2.5 px-2 text-center sm:text-left italic">
            Photo: {article.coverImageCaption}
          </figcaption>
        )}
      </section>

      {/* 3. MAIN ARTICLE BODY CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        {/* Editorial Trust & Affiliate Notice */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1F4747] shrink-0" />
            <span>
              <strong className="text-[#1A1A1A] font-semibold">Independent evaluation:</strong> Products are independently tested and researched without brand sponsorship.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <Link href="/editorial-standards" className="text-[#1F4747] hover:underline font-medium">
              How We Test
            </Link>
            <span>•</span>
            <Link href="/affiliate-disclosure" className="text-[#1F4747] hover:underline font-medium">
              Affiliate Disclosure
            </Link>
          </div>
        </div>

        {/* Quick Summary / Key Takeaways Box */}
        <div className="rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] p-6 md:p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#1F4747]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
              The Field Takeaways
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#1A1A1A] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#1F4747] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Table of Contents Box */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <TableOfContents items={article.tableOfContents} className="mb-12" />
        )}

        {/* TOP PICKS SHOWCASE */}
        <section id="our-top-picks" className="mb-16">
          <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4747] block mb-0.5">
                Lab Tested & Ranked
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1A1A1A]">
                Our Recommended Picks
              </h2>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#F7F7F7] border border-[#E5E5E5] rounded-md text-[#1A1A1A]">
              {article.topPicks.length} Top Contenders
            </span>
          </div>

          <div className="space-y-8">
            {article.topPicks.map((pick, index) => (
              <ProductPickCard key={pick.id} pick={pick} rankIndex={index + 1} />
            ))}
          </div>
        </section>

        {/* IN-DEPTH PROS & CONS EVALUATION */}
        <section id="pros-cons-analysis" className="mb-16">
          <ProsConsBox
            pros={article.topPicks[0]?.pros || []}
            cons={article.topPicks[0]?.cons || []}
            verdict={article.topPicks[0]?.verdict}
            title={`Top Pick Evaluation: ${article.topPicks[0]?.name}`}
          />
        </section>

        {/* COMPARISON TABLE */}
        {article.comparisonTable && (
          <section id="comparison-grid" className="mb-16">
            <ComparisonTable
              columns={article.comparisonTable.columns}
              rows={article.comparisonTable.rows}
              title={`${article.title} — Comparison Matrix`}
            />
          </section>
        )}

        {/* ARTICLE CONTENT SECTIONS */}
        <div className="space-y-12 text-[#1A1A1A]">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h3 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A] mb-4 pb-2 border-b border-[#E5E5E5]">
                {section.heading}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#1A1A1A] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout box if present */}
              {section.callout && (
                <div className="my-6 p-5 rounded-xl bg-[#F7F7F7] border-l-4 border-[#1F4747] text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-[#1A1A1A] mb-1">
                    <Info className="w-4 h-4 text-[#1F4747]" />
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-[#666666] leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}

              {/* In-section Pros & Cons if present */}
              {section.prosCons && (
                <ProsConsBox
                  pros={section.prosCons.pros}
                  cons={section.prosCons.cons}
                  verdict={section.prosCons.verdict}
                />
              )}
            </section>
          ))}
        </div>

        {/* AUTHOR BIO BOX */}
        <section className="my-16 p-6 sm:p-8 rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] flex flex-col sm:flex-row items-start gap-5">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-full object-cover border border-[#E5E5E5] shrink-0"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-[#1A1A1A] text-base">
                About the Author: {article.author.name}
              </h4>
              <Badge variant="neutral" size="sm">
                Verified Tester
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              {article.author.bio}
            </p>
          </div>
        </section>

        {/* RELATED GUIDES IN THIS CATEGORY */}
        {relatedArticles.length > 0 && (
          <section className="pt-12 border-t border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block mb-0.5">
                  More in {article.categoryName}
                </span>
                <h3 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
                  Related Buying Guides
                </h3>
              </div>
              <Link
                href={`/${article.category}`}
                className="text-xs font-bold text-[#1F4747] hover:text-[#173636]"
              >
                View all {article.categoryName} reviews →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relArt) => (
                <ArticleCard key={relArt.id} article={relArt} variant="standard" />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
