import React, { useState, useMemo } from 'react';
import {
  Search,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { getCategoryBySlug, getArticlesByCategory, CATEGORIES } from '../data/articles';
import { Link } from '../router';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ArticleCard } from '../components/article/ArticleCard';
import { Badge } from '../components/ui/Badge';
import { NotFoundPage } from './NotFoundPage';

export interface CategoryPageProps {
  categorySlug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug }) => {
  const category = getCategoryBySlug(categorySlug);
  const articles = getArticlesByCategory(categorySlug);

  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'score' | 'hours'>('latest');
  const [searchQuery, setSearchQuery] = useState('');

  if (!category) {
    return <NotFoundPage requestedPath={`/${categorySlug}`} />;
  }

  // Filter & sort logic
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Search within category
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.subtitle.toLowerCase().includes(q) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q)) ||
          art.topPicks.some((p) => p.name.toLowerCase().includes(q))
      );
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      result = result.filter((art) =>
        art.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === 'score') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'hours') {
      result.sort((a, b) => b.testingHours - a.testingHours);
    } else {
      // Latest (default order from data)
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return result;
  }, [articles, searchQuery, selectedTag, sortBy]);

  const spotlightArticle = articles.find((a) => a.isFeatured) || articles[0];

  return (
    <div className="space-y-12 pb-24 bg-white">
      {/* 1. CATEGORY HERO HEADER */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[{ label: category.name }]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="category" size="sm">
                  Department Hub
                </Badge>
                <span className="text-xs text-[#666666]">
                  {category.testedCount} Products Tested in Lab
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#1A1A1A] tracking-tight">
                {category.name} Reviews & Guides
              </h1>

              <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-2xl">
                {category.description}
              </p>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="text-[#666666] font-semibold uppercase text-[10px]">
                  Trending Topics:
                </span>
                {category.popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag.toLowerCase() === selectedTag.toLowerCase() ? 'all' : tag)}
                    className={`px-3 py-1 rounded-full font-medium transition-colors border ${
                      selectedTag.toLowerCase() === tag.toLowerCase()
                        ? 'bg-[#1F4747] text-white border-[#1F4747]'
                        : 'bg-[#F7F7F7] text-[#1A1A1A] border-[#E5E5E5] hover:bg-[#E5E5E5]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Department Metric Card */}
            <div className="lg:col-span-4 bg-[#F7F7F7] rounded-2xl p-6 border border-[#E5E5E5] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F4747]" />
                <span>{category.name} Testing Protocol</span>
              </h3>
              <div className="space-y-2 text-xs text-[#666666] leading-relaxed">
                <p>
                  • All items tested side-by-side in standardized residential kitchen, gym, and living environments.
                </p>
                <p>
                  • Thermal retention, mechanical wear, and drop cycles recorded digitally.
                </p>
                <p>
                  • Every top pick is maintained for at least 12 months for long-term reliability tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SORT CONTROLS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F7F7] p-4 rounded-xl border border-[#E5E5E5] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tag Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto text-xs pb-1 md:pb-0">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
                selectedTag === 'all'
                  ? 'bg-[#1F4747] text-white'
                  : 'text-[#666666] hover:bg-[#E5E5E5]'
              }`}
            >
              All {category.name} ({articles.length})
            </button>
            {category.popularTags.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag.toLowerCase() === selectedTag.toLowerCase() ? 'all' : tag)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 ${
                  selectedTag.toLowerCase() === tag.toLowerCase()
                    ? 'bg-[#1F4747] text-white'
                    : 'text-[#666666] hover:bg-[#E5E5E5]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Quick in-category search */}
            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${category.name}...`}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#E5E5E5] bg-white text-xs text-[#1A1A1A] placeholder:text-[#666666] focus:outline-none focus:border-[#1F4747]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs shrink-0">
              <span className="text-[#666666] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort articles"
                className="bg-white border border-[#E5E5E5] rounded-lg px-2.5 py-1.5 text-[#1A1A1A] font-medium focus:outline-none cursor-pointer text-xs"
              >
                <option value="latest">Latest Field Tests</option>
                <option value="score">Highest Tested Score</option>
                <option value="hours">Most Testing Hours</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY SPOTLIGHT ARTICLE */}
      {spotlightArticle && selectedTag === 'all' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#666666]">
              Department Spotlight Guide
            </h2>
            <span className="text-xs text-[#1F4747] font-semibold">
              Highest Tested Rating in {category.name}
            </span>
          </div>
          <ArticleCard article={spotlightArticle} variant="featured-hero" />
        </section>
      )}

      {/* 4. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold font-editorial text-[#1A1A1A]">
            {selectedTag !== 'all' ? `Guides tagged "${selectedTag}"` : `All ${category.name} Guides`}
          </h2>
          <span className="text-xs text-[#666666]">
            Showing {filteredArticles.length} of {articles.length} guides
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F7F7] rounded-xl border border-[#E5E5E5] p-8">
            <BookOpen className="w-10 h-10 text-[#666666] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#1A1A1A]">No guides found</h3>
            <p className="text-xs text-[#666666] mt-1 max-w-sm mx-auto">
              No articles match your current filter criteria. Try resetting your tags or search query.
            </p>
            <button
              onClick={() => {
                setSelectedTag('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#1F4747] text-white text-xs font-semibold rounded-lg hover:bg-[#173636] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        )}
      </section>

      {/* 5. EXPLORE OTHER DEPARTMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-[#E5E5E5] pt-10">
          <h3 className="text-lg font-bold font-editorial text-[#1A1A1A] mb-6">
            Explore Other Tested Departments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((otherCat) => (
              <Link
                key={otherCat.slug}
                href={`/${otherCat.slug}`}
                className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] hover:border-[#1F4747] hover:bg-white hover:shadow-2xs transition-all"
              >
                <span className="font-bold text-[#1A1A1A] text-sm block">
                  {otherCat.name}
                </span>
                <span className="text-[11px] text-[#666666] block mt-0.5">
                  {otherCat.testedCount} products tested
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
