
// This file re-exports all the WordPress API functionality
// to maintain backwards compatibility with existing imports

// Export types
export type { 
  WordPressPost,
  WordPressSiteSettings,
  WordPressCategory
} from './api/types';

// Export default mock data
export { 
  defaultCategories,
  defaultSiteSettings
} from './api/mockData';

// Export API functions
export {
  fetchPosts,
  fetchPostById,
  fetchPostBySlug,
  fetchCategories,
  fetchSiteSettings,
  fetchPostsInfinite
} from './api/wordpress';

// Export hooks
export {
  useWordPressSiteSettings,
  useWordPressPosts,
  useWordPressPost,
  useWordPressPostBySlug,
  useWordPressCategories
} from './api/hooks';

// Export utility functions
export {
  stripHtml,
  formatWordPressDate,
  getCategoryFromPost,
  getFeaturedImageUrl
} from './api/utils';
