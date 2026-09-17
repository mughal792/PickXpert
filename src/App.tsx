import React from 'react';
import { RouterProvider, useRouter } from './router';
import { BookmarkProvider } from './context/BookmarkContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { EditorialStandardsPage } from './pages/EditorialStandardsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  const { route } = useRouter();

  const renderCurrentPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage />;
      case 'category':
        return <CategoryPage categorySlug={route.categorySlug} />;
      case 'article':
        return (
          <ArticlePage
            categorySlug={route.categorySlug}
            articleSlug={route.articleSlug}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'editorial-standards':
        return <EditorialStandardsPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'affiliate-disclosure':
        return <AffiliateDisclosurePage />;
      case 'contact':
        return <ContactPage />;
      case 'not-found':
      default:
        return <NotFoundPage requestedPath={'path' in route ? route.path : undefined} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] selection:bg-[#1F4747]/20 selection:text-[#1A1A1A] font-sans">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <BookmarkProvider>
        <AppContent />
      </BookmarkProvider>
    </RouterProvider>
  );
}
