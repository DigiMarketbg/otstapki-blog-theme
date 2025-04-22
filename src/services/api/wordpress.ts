
import { WordPressPost, WordPressSiteSettings, WordPressCategory } from './types';
import { defaultSiteSettings, generateMockPosts } from './mockData';

const WP_API_BASE_URL = "https://yourdomain.com/wp-json/wp/v2";

// Function to fetch posts from WordPress
export const fetchPosts = async (categoryId?: number, page: number = 1): Promise<WordPressPost[]> => {
  let url = `${WP_API_BASE_URL}/posts?_embed&per_page=10&page=${page}`;
  
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    // For development, return mock data
    return generateMockPosts(5, categoryId);
  }
};

// Function to fetch post by ID
export const fetchPostById = async (id: number): Promise<WordPressPost> => {
  try {
    const response = await fetch(`${WP_API_BASE_URL}/posts/${id}?_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    // For development, return mock data
    return generateMockPosts(1)[0];
  }
};

// Function to fetch post by slug
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost> => {
  try {
    const response = await fetch(`${WP_API_BASE_URL}/posts?slug=${slug}&_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const posts = await response.json();
    if (posts.length === 0) {
      throw new Error('Post not found');
    }
    return posts[0];
  } catch (error) {
    console.error("Error fetching WordPress post by slug:", error);
    // For development, return mock data
    return generateMockPosts(1)[0];
  }
};

// Function to fetch categories from WordPress
export const fetchCategories = async (): Promise<WordPressCategory[]> => {
  try {
    const response = await fetch(`${WP_API_BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress categories:", error);
    // For development, return default categories
    return Array.from(require('./mockData').defaultCategories);
  }
};

// Function to fetch site settings from WordPress
export const fetchSiteSettings = async (): Promise<WordPressSiteSettings> => {
  try {
    // Typically would use a custom endpoint or the REST API
    const response = await fetch(`${WP_API_BASE_URL.replace('/wp/v2', '')}/wp/v2/settings`);
    if (!response.ok) {
      throw new Error('Failed to fetch site settings');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress site settings:", error);
    // For development, return default settings
    return defaultSiteSettings;
  }
};

// Function to fetch posts with pagination for infinite query
export const fetchPostsInfinite = async ({ pageParam = 1, queryKey }: any): Promise<{
  posts: WordPressPost[],
  nextPage: number | null
}> => {
  const [_, categoryId] = queryKey;
  
  try {
    const posts = await fetchPosts(categoryId, pageParam);
    return { 
      posts, 
      nextPage: posts.length === 10 ? pageParam + 1 : null 
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    // For development, return mock data
    const posts = generateMockPosts(5, categoryId);
    return {
      posts,
      nextPage: null
    };
  }
};
