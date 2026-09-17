import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CATEGORIES, getArticleBySlug } from '../data/articles';

export type RouteInfo =
  | { name: 'home' }
  | { name: 'category'; categorySlug: string }
  | { name: 'article'; categorySlug: string; articleSlug: string }
  | { name: 'about' }
  | { name: 'editorial-standards' }
  | { name: 'privacy-policy' }
  | { name: 'affiliate-disclosure' }
  | { name: 'contact' }
  | { name: 'not-found'; path: string };

interface RouterContextType {
  path: string;
  route: RouteInfo;
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string): RouteInfo {
  // normalize path: trim trailing slashes, ensure leading slash
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/') {
    return { name: 'home' };
  }

  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 1) {
    const slug = parts[0].toLowerCase();

    if (slug === 'about' || slug === 'about-us') {
      return { name: 'about' };
    }
    if (slug === 'editorial-standards' || slug === 'standards' || slug === 'how-we-test') {
      return { name: 'editorial-standards' };
    }
    if (slug === 'privacy-policy' || slug === 'privacy') {
      return { name: 'privacy-policy' };
    }
    if (slug === 'affiliate-disclosure' || slug === 'disclosure') {
      return { name: 'affiliate-disclosure' };
    }
    if (slug === 'contact' || slug === 'contact-us') {
      return { name: 'contact' };
    }

    const categoryExists = CATEGORIES.some((c) => c.slug === slug);
    if (categoryExists) {
      return { name: 'category', categorySlug: slug };
    }
    return { name: 'not-found', path: cleanPath };
  }

  if (parts.length === 2) {
    const [catSlug, artSlug] = parts;
    const category = CATEGORIES.find((c) => c.slug === catSlug.toLowerCase());
    if (category) {
      const article = getArticleBySlug(catSlug.toLowerCase(), artSlug);
      if (article) {
        return { name: 'article', categorySlug: catSlug.toLowerCase(), articleSlug: artSlug };
      }
    }
    return { name: 'not-found', path: cleanPath };
  }

  return { name: 'not-found', path: cleanPath };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [route, setRoute] = useState<RouteInfo>(() => parsePath(path));

  useEffect(() => {
    const onPopState = () => {
      const currentPath = window.location.pathname || '/';
      setPath(currentPath);
      setRoute(parsePath(currentPath));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return;

    // Handle hash jumps within the same page
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetUrl = to.startsWith('/') ? to : `/${to}`;
    const [targetPath, hash] = targetUrl.split('#');

    if (options?.replace) {
      window.history.replaceState(null, '', targetUrl);
    } else {
      window.history.pushState(null, '', targetUrl);
    }

    setPath(targetPath);
    setRoute(parsePath(targetPath));

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ path, route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextType {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return ctx;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, children, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      if (href.startsWith('http://') || href.startsWith('https://')) {
        // External link, let default behavior happen
        return;
      }
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
