// articles.js - Static dummy/placeholder data for PickXpert Reviews
// Re-exports the typed dataset for compatibility with both JS and TS consumers.
import {
  CATEGORIES,
  ARTICLES,
  getAllArticles,
  getArticlesByCategory,
  getArticleBySlug,
  getCategoryBySlug,
  getFeaturedArticles,
  getTrendingArticles,
  searchArticles,
} from './src/data/articles';

export {
  CATEGORIES,
  ARTICLES,
  getAllArticles,
  getArticlesByCategory,
  getArticleBySlug,
  getCategoryBySlug,
  getFeaturedArticles,
  getTrendingArticles,
  searchArticles,
};

export default {
  CATEGORIES,
  ARTICLES,
};
