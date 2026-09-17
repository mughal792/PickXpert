import React from 'react';
import {
  UtensilsCrossed,
  Dumbbell,
  PawPrint,
  Cpu,
  Laptop,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { CATEGORIES, ARTICLES, getFeaturedArticles, getTrendingArticles } from '../data/articles';
import { Link } from '../router';
import { ArticleCard } from '../components/article/ArticleCard';
import { Badge } from '../components/ui/Badge';

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#1F4747]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-[#1F4747]" />,
  PawPrint: <PawPrint className="w-5 h-5 text-[#1F4747]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#1F4747]" />,
  Laptop: <Laptop className="w-5 h-5 text-[#1F4747]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#1F4747]" />,
};

export const HomePage: React.FC = () => {
  const featuredArticles = getFeaturedArticles();
  const heroArticle = featuredArticles[0] || ARTICLES[0];
  const trendingArticles = getTrendingArticles();

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* 1. HERO SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F4747] animate-pulse" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#666666]">
              Lead Field Evaluation
            </h2>
          </div>
          <span className="text-xs text-[#666666] hidden sm:inline">
            Updated Weekly with Certified Test Data
          </span>
        </div>

        {/* Featured Hero Card */}
        <ArticleCard article={heroArticle} variant="featured-hero" />
      </section>

      {/* 2. CATEGORY BROWSER GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5E5] pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4747] block mb-1">
                Explore Departments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1A1A1A]">
                Browse By Tested Category
              </h2>
            </div>
            <p className="text-[#666666] text-xs sm:text-sm max-w-md">
              Over 600 consumer products tested in our dedicated testing labs. Select a department to view all buying guides.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group p-4 rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] hover:border-[#1F4747] hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E5E5] group-hover:border-[#1F4747] flex items-center justify-center transition-colors mb-3">
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#1F4747] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#666666] block mt-0.5">
                    {cat.testedCount} products tested
                  </span>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-semibold text-[#666666] group-hover:text-[#1F4747]">
                  <span>View Guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING PICKS & TESTING CREDENTIALS ROW */}
      <section className="bg-[#F7F7F7] border-y border-[#E5E5E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F4747] bg-white border border-[#E5E5E5] px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-[#1F4747]" />
                <span>Trending Right Now</span>
              </div>
              <h3 className="text-2xl font-bold font-editorial text-[#1A1A1A]">
                Most Popular Guides This Week
              </h3>
              <p className="text-[#666666] text-xs md:text-sm leading-relaxed">
                These articles generated the most reader inquiries and price track alerts over the past 7 days.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trendingArticles.slice(0, 2).map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORY PREVIEWS (KITCHEN, FITNESS, PET CARE, SMART HOME, HOME OFFICE, BABY ESSENTIALS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {CATEGORIES.map((category) => {
          const catArticles = ARTICLES.filter((art) => art.category === category.slug);

          return (
            <section key={category.slug} className="border-t border-[#E5E5E5] pt-12">
              {/* Category Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E5E5E5] gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F7F7F7] border border-[#E5E5E5] text-[#1A1A1A]">
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#1A1A1A]">
                        {category.name}
                      </h2>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#F7F7F7] border border-[#E5E5E5] text-[#666666] font-medium">
                        {catArticles.length} Guides
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                      {category.shortDescription}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${category.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F4747] hover:text-[#173636] transition-colors shrink-0 group"
                >
                  <span>See all {category.name} reviews</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Article Cards Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="standard" />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* 5. EDITORIAL INTEGRITY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl bg-[#1F4747] text-white p-8 md:p-12 overflow-hidden relative shadow-md">
          <div className="relative z-10 max-w-2xl space-y-4">
            <Badge variant="award" size="sm">
              The PickXpert Promise
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold font-editorial leading-tight">
              We test gear like you would, with zero manufacturer kickbacks.
            </h3>
            <p className="text-[#E5E5E5] text-sm leading-relaxed">
              Every knife cuts real onions until dull; every car seat is installed in compact hatchbacks by certified CPST technicians; every robot vacuum faces genuine pet hair and messy kitchen crumbs. When we pick a winner, it’s because it survived our test gauntlet.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#E5E5E5]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Zero Paid Placements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>100% Retail Purchases</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Continuous Re-Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
