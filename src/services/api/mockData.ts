
import { WordPressPost, WordPressSiteSettings, WordPressCategory } from './types';

// Default site settings
export const defaultSiteSettings: WordPressSiteSettings = {
  title: "Отстъпки БГ",
  description: "Открий най-добрите намаления и оферти",
  logo: "/lovable-uploads/6cbb2d8a-6ad4-48cf-bdd4-443bd16a25c8.png",
  favicon: "/favicon.ico"
};

// Default categories
export const defaultCategories: WordPressCategory[] = [];

// Generate empty mock posts (removed sample posts)
export const generateMockPosts = (count: number = 0, categoryId?: number): WordPressPost[] => {
  return [];
};
