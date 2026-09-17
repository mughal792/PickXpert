import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  savedIds: string[];
  toggleBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
  clearBookmarks: () => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const STORAGE_KEY = 'pickxpert_saved_articles_v1';

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = localStorage.getItem(STORAGE_KEY);
        return item ? JSON.parse(item) : ['art-kitchen-1', 'art-smart-1'];
      } catch {
        return ['art-kitchen-1', 'art-smart-1'];
      }
    }
    return ['art-kitchen-1', 'art-smart-1'];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // ignore
    }
  }, [savedIds]);

  const toggleBookmark = (articleId: string) => {
    setSavedIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const isBookmarked = (articleId: string) => savedIds.includes(articleId);

  const clearBookmarks = () => setSavedIds([]);

  return (
    <BookmarkContext.Provider value={{ savedIds, toggleBookmark, isBookmarked, clearBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export function useBookmarks(): BookmarkContextType {
  const ctx = useContext(BookmarkContext);
  if (!ctx) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return ctx;
}
