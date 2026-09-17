import React, { useEffect } from 'react';
import { X, Bookmark, Trash2 } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { ARTICLES } from '../../data/articles';
import { Link } from '../../router';

export interface BookmarkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookmarkDrawer: React.FC<BookmarkDrawerProps> = ({ isOpen, onClose }) => {
  const { savedIds, toggleBookmark, clearBookmarks } = useBookmarks();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((art) => savedIds.includes(art.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col border-l border-[#E5E5E5] animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1F4747] text-white shadow-xs">
              <Bookmark className="w-4 h-4 fill-white text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] text-base">Reading List</h3>
              <p className="text-xs text-[#666666]">
                {savedArticles.length} saved {savedArticles.length === 1 ? 'guide' : 'guides'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#666666] hover:text-[#1A1A1A] rounded-md hover:bg-[#E5E5E5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
          {savedArticles.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-center mx-auto mb-3 text-[#666666]">
                <Bookmark className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-[#1A1A1A]">Your list is currently empty</h4>
              <p className="text-xs text-[#666666] mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any review or buying guide to save it for later comparison.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => {
              const url = `/${article.category}/${article.slug}`;
              return (
                <div
                  key={article.id}
                  className="group relative p-3.5 rounded-xl border border-[#E5E5E5] bg-[#F7F7F7] hover:border-[#1F4747] shadow-2xs transition-all flex gap-3.5 items-start"
                >
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover bg-white shrink-0 border border-[#E5E5E5]"
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4747]">
                      {article.categoryName}
                    </span>
                    <h5 className="text-xs font-semibold text-[#1A1A1A] leading-snug line-clamp-2 mt-0.5 group-hover:text-[#1F4747]">
                      <Link href={url} onClick={onClose}>
                        {article.title}
                      </Link>
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-[#666666] mt-1.5">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>Top pick: {article.topPicks[0]?.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleBookmark(article.id)}
                    title="Remove from saved"
                    className="absolute top-3 right-3 text-[#666666] hover:text-[#1A1A1A] p-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-[#E5E5E5] bg-[#F7F7F7] flex items-center justify-between">
            <button
              onClick={clearBookmarks}
              className="text-xs font-semibold text-[#666666] hover:text-[#1A1A1A] transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="text-xs font-bold px-4 py-2 bg-[#1F4747] text-white rounded-lg hover:bg-[#173636] transition-colors shadow-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
