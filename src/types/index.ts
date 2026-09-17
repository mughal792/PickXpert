export type CategorySlug =
  | 'kitchen'
  | 'fitness'
  | 'pet-care'
  | 'smart-home'
  | 'home-office'
  | 'baby-essentials';

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  testedCount: number;
  popularTags: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductPick {
  id: string;
  name: string;
  award: 'Top Pick' | 'Upgrade Pick' | 'Best Budget' | 'Best Value' | 'Editor\'s Choice' | 'Runner-Up';
  rating: number; // e.g. 9.7 or 4.9
  price: string;
  retailer: string;
  affiliateUrl: string;
  imageUrl: string;
  summary: string;
  pros: string[];
  cons: string[];
  specs: ProductSpec[];
  verdict: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: {
    type: 'tip' | 'note' | 'warning';
    title: string;
    text: string;
  };
  prosCons?: {
    pros: string[];
    cons: string[];
    verdict: string;
  };
}

export interface ComparisonRow {
  productName: string;
  award?: string;
  rating: number;
  price: string;
  specs: string[];
  isWinner?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  category: CategorySlug;
  categoryName: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  coverImageCaption: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  testingHours: number;
  productsTestedCount: number;
  rating: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isStaffPick?: boolean;
  tags: string[];
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  topPicks: ProductPick[];
  comparisonTable?: {
    columns: string[];
    rows: ComparisonRow[];
  };
  sections: ContentSection[];
  faqs?: { question: string; answer: string }[];
}
