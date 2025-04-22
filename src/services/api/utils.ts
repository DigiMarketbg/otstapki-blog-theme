
import { WordPressPost } from './types';

// Helper function to clean HTML content from WordPress
export const stripHtml = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

// Format WordPress date
export const formatWordPressDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('bg-BG', options);
};

// Get the category name from the post
export const getCategoryFromPost = (post: WordPressPost): string => {
  if (post._embedded && post._embedded['wp:term']) {
    const categories = post._embedded['wp:term'][0];
    if (categories && categories.length > 0) {
      return categories[0].name;
    }
  }
  return "Общо";
};

// Get the featured image URL
export const getFeaturedImageUrl = (post: WordPressPost): string => {
  if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return "/placeholder.svg";
};
