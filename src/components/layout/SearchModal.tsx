import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { searchArticles, ARTICLES, CATEGORIES } from '../../data/articles';
import { useRouter } from '../../router';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const rawResults = query.trim() ? searchArticles(query) : ARTICLES.slice(0, 4);
  const filteredResults =
    selectedCategory === 'all'
      ? rawResults
      : rawResults.filter((art) => art.category === selectedCategory);

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E5E5E5] overflow-hidden z-10 my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 md:px-6 py-4 border-b border-[#E5E5E5] gap-3">
          <Search className="w-5 h-5 text-[#666666] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tested products, buying guides, brands (e.g. Mac knife, Dyson, Garmin)..."
            className="w-full text-[#1A1A1A] placeholder:text-[#666666] text-sm md:text-base bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#666666] hover:text-[#1A1A1A] rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-[#F7F7F7] text-[#666666] border border-[#E5E5E5] rounded-md hover:bg-[#E5E5E5]"
          >
            ESC
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-4 md:px-6 py-2.5 bg-[#F7F7F7] border-b border-[#E5E5E5] flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[#666666] font-semibold uppercase text-[10px] mr-1">Filter:</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#1F4747] text-white'
                : 'bg-white text-[#666666] hover:bg-[#E5E5E5] border border-[#E5E5E5]'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-[#1F4747] text-white'
                  : 'bg-white text-[#666666] hover:bg-[#E5E5E5] border border-[#E5E5E5]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6 divide-y divide-[#E5E5E5]">
          {!query.trim() && (
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#666666] pb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1F4747]" />
              <span>Trending Field-Tested Guides</span>
            </div>
          )}

          {filteredResults.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-semibold text-[#1A1A1A]">No matching buying guides found</p>
              <p className="text-xs text-[#666666] mt-1">
                Try searching for general terms like "kitchen", "espresso", "running", or "monitor".
              </p>
            </div>
          ) : (
            filteredResults.map((article) => {
              const url = `/${article.category}/${article.slug}`;
              return (
                <div
                  key={article.id}
                  onClick={() => handleSelect(url)}
                  className="group py-3.5 px-3 rounded-xl hover:bg-[#F7F7F7] cursor-pointer flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover bg-[#F7F7F7] border border-[#E5E5E5] shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4747] block">
                        {article.categoryName} • {article.readTime}
                      </span>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#1F4747] truncate">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#666666] truncate mt-0.5">
                        Top pick: {article.topPicks[0]?.name}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#1F4747] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F7F7F7] border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
          <span>{filteredResults.length} guides available</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
