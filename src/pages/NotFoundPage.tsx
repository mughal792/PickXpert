import React, { useState } from 'react';
import { Home, ArrowRight, Compass, AlertTriangle } from 'lucide-react';
import { Link, useRouter } from '../router';
import { CATEGORIES, ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/article/ArticleCard';

export interface NotFoundPageProps {
  requestedPath?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ requestedPath }) => {
  const { navigate } = useRouter();
  const [query] = useState('');

  const recommendedArticles = ARTICLES.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 bg-white">
      {/* 404 Hero */}
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] text-[#1F4747] border border-[#E5E5E5] text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 text-[#1F4747]" />
          <span>404 — Article or Department Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight">
          Even our test lab couldn't locate this page.
        </h1>

        <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
          The guide you requested {requestedPath ? `("${requestedPath}")` : ''} may have been moved, updated into a newer annual guide, or never existed in our testing log.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F4747] text-white font-semibold text-sm hover:bg-[#173636] transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/kitchen"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#E5E5E5] text-[#1A1A1A] font-semibold text-sm hover:bg-[#F7F7F7] transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Kitchen Reviews</span>
          </Link>
        </div>
      </div>

      {/* Category Directory Quick Links */}
      <div className="border-t border-[#E5E5E5] pt-12">
        <div className="text-center mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#666666]">
            Or Explore Tested Departments Directly
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] hover:border-[#1F4747] hover:bg-white hover:shadow-xs transition-all text-center block"
            >
              <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{cat.name}</h4>
              <span className="text-[11px] text-[#666666] block">
                {cat.testedCount} tested
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Guides Fallback */}
      <div className="border-t border-[#E5E5E5] pt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F4747] block mb-0.5">
              Recommended Reading
            </span>
            <h2 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
              Popular Field-Tested Guides
            </h2>
          </div>
          <Link
            href="/"
            className="text-xs font-bold text-[#1F4747] hover:text-[#173636] flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="standard" />
          ))}
        </div>
      </div>
    </div>
  );
};
