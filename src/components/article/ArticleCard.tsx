import React from 'react';
import { Bookmark, Clock, Star, ArrowUpRight } from 'lucide-react';
import { Article } from '../../types';
import { Link } from '../../router';
import { Badge } from '../ui/Badge';
import { useBookmarks } from '../../context/BookmarkContext';

export interface ArticleCardProps {
  article: Article;
  variant?: 'standard' | 'horizontal' | 'compact' | 'featured-hero';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'standard',
  className = '',
}) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(article.id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id);
  };

  const articleUrl = `/${article.category}/${article.slug}`;
  const topPick = article.topPicks[0];

  // 1. Featured Hero Layout (Used on Homepage Top)
  if (variant === 'featured-hero') {
    return (
      <article
        className={`group relative rounded-2xl border border-[#E5E5E5] bg-[#F7F7F7] overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 ${className}`}
      >
        <div className="lg:col-span-7 relative overflow-hidden bg-white min-h-[320px] lg:min-h-[440px]">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <Badge variant="award" size="sm">
              Featured Buying Guide
            </Badge>
          </div>
          <button
            onClick={handleBookmark}
            aria-label={bookmarked ? 'Remove bookmark' : 'Save article'}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/95 backdrop-blur-xs text-[#1A1A1A] hover:bg-white shadow-xs transition-colors"
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#1F4747] text-[#1F4747]' : 'text-[#1A1A1A]'}`} />
          </button>
        </div>

        <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#666666] mb-3">
              <Link
                href={`/${article.category}`}
                className="font-bold tracking-wider text-[#1F4747] hover:underline uppercase text-[11px]"
              >
                {article.categoryName}
              </Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#666666]" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="text-[#666666]">{article.testingHours} hrs tested</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-editorial text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#1F4747] transition-colors">
              <Link href={articleUrl} className="focus:outline-none">
                {article.title}
              </Link>
            </h2>

            <p className="text-[#666666] text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
              {article.excerpt}
            </p>

            {topPick && (
              <div className="bg-white rounded-xl p-4 border border-[#E5E5E5] mb-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#666666] block mb-1">
                  Tested Winner
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold text-[#1A1A1A] truncate pr-2">
                    {topPick.name}
                  </span>
                  <span className="text-xs font-bold text-[#1F4747] shrink-0">
                    {topPick.price}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover border border-[#E5E5E5]"
              />
              <div className="text-xs">
                <span className="font-semibold text-[#1A1A1A] block">
                  {article.author.name}
                </span>
                <span className="text-[#666666]">{article.publishedAt}</span>
              </div>
            </div>

            <Link
              href={articleUrl}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#1F4747] group-hover:translate-x-1 transition-all"
            >
              <span>Read Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // 2. Horizontal Layout (Used in Category spotlights or lists)
  if (variant === 'horizontal') {
    return (
      <article
        className={`group relative rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] overflow-hidden shadow-xs hover:shadow-sm transition-all duration-200 grid grid-cols-1 sm:grid-cols-12 ${className}`}
      >
        <div className="sm:col-span-5 relative overflow-hidden bg-white min-h-[200px]">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={handleBookmark}
            aria-label={bookmarked ? 'Remove bookmark' : 'Save article'}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#1A1A1A] hover:bg-white shadow-xs transition-colors"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#1F4747] text-[#1F4747]' : 'text-[#1A1A1A]'}`} />
          </button>
        </div>

        <div className="sm:col-span-7 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#666666] mb-2">
              <Link
                href={`/${article.category}`}
                className="font-bold tracking-wider text-[#1F4747] hover:underline uppercase text-[10px]"
              >
                {article.categoryName}
              </Link>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <h3 className="text-lg font-bold font-editorial text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#1F4747] transition-colors">
              <Link href={articleUrl}>{article.title}</Link>
            </h3>

            <p className="text-[#666666] text-xs md:text-sm line-clamp-2 mb-4 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs pt-3 border-t border-[#E5E5E5] text-[#666666]">
            <span>By {article.author.name}</span>
            <div className="flex items-center gap-1 font-semibold text-[#1A1A1A]">
              <Star className="w-3.5 h-3.5 text-[#1F4747] fill-[#1F4747]" />
              <span>{article.rating}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // 3. Compact Layout (Used in sidebars, search results, bookmarks)
  if (variant === 'compact') {
    return (
      <article
        className={`group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F7F7F7] transition-colors ${className}`}
      >
        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white shrink-0 border border-[#E5E5E5]">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/${article.category}`}
            className="text-[10px] font-bold uppercase tracking-wider text-[#1F4747] hover:underline"
          >
            {article.categoryName}
          </Link>
          <h4 className="text-xs font-semibold text-[#1A1A1A] leading-snug truncate group-hover:text-[#1F4747] mt-0.5">
            <Link href={articleUrl}>{article.title}</Link>
          </h4>
          <span className="text-[11px] text-[#666666] mt-1 block">
            {article.readTime} • {article.publishedAt}
          </span>
        </div>
      </article>
    );
  }

  // 4. Default Standard Card Layout (Grid preview cards)
  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] overflow-hidden shadow-xs hover:shadow-sm transition-all duration-200 ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-white">
        <img
          src={article.coverImage}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="category" size="sm">
            {article.categoryName}
          </Badge>
        </div>
        <button
          onClick={handleBookmark}
          aria-label={bookmarked ? 'Remove bookmark' : 'Save article'}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#1A1A1A] hover:bg-white shadow-xs transition-colors"
        >
          <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#1F4747] text-[#1F4747]' : 'text-[#1A1A1A]'}`} />
        </button>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#666666] mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#666666]" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="text-[#666666]">{article.productsTestedCount} models tested</span>
          </div>

          <h3 className="text-lg font-bold font-editorial text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#1F4747] transition-colors">
            <Link href={articleUrl} className="focus:outline-none">
              {article.title}
            </Link>
          </h3>

          <p className="text-[#666666] text-xs md:text-sm line-clamp-2 leading-relaxed mb-4">
            {article.excerpt}
          </p>

          {topPick && (
            <div className="p-2.5 rounded-lg bg-white border border-[#E5E5E5] mb-4 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4747] block">
                Top Pick: {topPick.name.split('(')[0].trim()}
              </span>
              <span className="text-[#666666] font-medium text-[11px] block mt-0.5">
                {topPick.price} • {topPick.award}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              referrerPolicy="no-referrer"
              className="w-6 h-6 rounded-full object-cover border border-[#E5E5E5]"
            />
            <span className="font-medium text-[#1A1A1A] truncate max-w-[120px]">
              {article.author.name}
            </span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-[#1A1A1A]">
            <Star className="w-3.5 h-3.5 text-[#1F4747] fill-[#1F4747]" />
            <span>{article.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
