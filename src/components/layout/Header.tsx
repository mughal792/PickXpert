import React, { useState } from 'react';
import {
  Search,
  Bookmark,
  Menu,
  X,
} from 'lucide-react';
import { CATEGORIES } from '../../data/articles';
import { Link, useRouter } from '../../router';
import { useBookmarks } from '../../context/BookmarkContext';
import { SearchModal } from './SearchModal';
import { BookmarkDrawer } from './BookmarkDrawer';
import { Logo } from '../ui/Logo';

export const Header: React.FC = () => {
  const { route } = useRouter();
  const { savedIds } = useBookmarks();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active category detection
  let currentCategorySlug: string | null = null;
  if (route.name === 'category') {
    currentCategorySlug = route.categorySlug;
  } else if (route.name === 'article') {
    currentCategorySlug = route.categorySlug;
  }

  return (
    <header className="sticky top-0 z-40 bg-[#1F4747] text-white border-b border-[#173636] transition-shadow shadow-xs">
      {/* Single Compact Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <Link href="/" className="group shrink-0 inline-flex items-center" aria-label="PickXpert Home">
          <Logo variant="on-dark" size="md" />
        </Link>

        {/* Center: Navigation Links (Desktop) with subtle underline indicator */}
        <nav className="hidden lg:flex items-center h-full space-x-5 xl:space-x-7">
          {CATEGORIES.map((category) => {
            const isActive = currentCategorySlug === category.slug;
            return (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className={`h-full flex items-center text-xs font-semibold tracking-wider whitespace-nowrap transition-colors border-b-2 pt-0.5 ${
                  isActive
                    ? 'text-white border-white font-bold'
                    : 'text-[#E5E5E5]/90 border-transparent hover:text-white hover:border-white/40'
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: Search, Saved Bookmarks, and Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Quick Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs transition-colors flex items-center gap-1.5 border border-white/15"
            aria-label="Search reviews"
            title="Search reviews"
          >
            <Search className="w-4 h-4 text-white/90" />
            <span className="hidden xl:inline text-xs text-[#E5E5E5]">Search</span>
            <kbd className="hidden xl:inline-block px-1 py-0.2 text-[9px] bg-white/15 border border-white/25 rounded font-mono text-white/80">
              /
            </kbd>
          </button>

          {/* Saved Articles Bookmark Trigger */}
          <button
            onClick={() => setIsBookmarkOpen(true)}
            className="relative p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-1.5 text-xs font-medium transition-colors"
            aria-label="Saved reviews"
            title="View saved reading list"
          >
            <Bookmark className={`w-4 h-4 ${savedIds.length > 0 ? 'text-white fill-white' : 'text-white/90'}`} />
            <span className="hidden sm:inline text-xs text-[#E5E5E5]">Saved</span>
            {savedIds.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-white text-[#1F4747] text-[10px] font-bold flex items-center justify-center">
                {savedIds.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-white rounded-lg hover:bg-white/10 ml-0.5"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#173636] px-4 py-4 shadow-lg">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#E5E5E5]/70 mb-2 px-2">
            Categories & Departments
          </div>
          <div className="space-y-1">
            {CATEGORIES.map((cat) => {
              const isActive = currentCategorySlug === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white font-bold border-l-2 border-white'
                      : 'text-[#E5E5E5] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-[#E5E5E5]/60 font-normal">
                    {cat.testedCount} tested
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 mt-3 border-t border-white/10">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#E5E5E5]/70 mb-2 px-2">
              About & Trust
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#E5E5E5] hover:bg-white/10 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/editorial-standards"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#E5E5E5] hover:bg-white/10 hover:text-white"
              >
                Standards
              </Link>
              <Link
                href="/affiliate-disclosure"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#E5E5E5] hover:bg-white/10 hover:text-white"
              >
                Disclosure
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#E5E5E5] hover:bg-white/10 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Bookmark Drawer */}
      <BookmarkDrawer isOpen={isBookmarkOpen} onClose={() => setIsBookmarkOpen(false)} />
    </header>
  );
};
