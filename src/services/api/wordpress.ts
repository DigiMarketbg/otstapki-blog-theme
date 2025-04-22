import { WordPressPost, WordPressSiteSettings, WordPressCategory } from './types';
import { defaultSiteSettings, defaultCategories, generateMockPosts } from './mockData';

const WP_API_BASE_URL = "https://blog.otstapki.bg/wp-json/wp/v2";

// Function to fetch posts from WordPress
export const fetchPosts = async (categoryId?: number, page: number = 1): Promise<WordPressPost[]> => {
  let url = `${WP_API_BASE_URL}/posts?_embed&per_page=10&page=${page}`;
  
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }
  
  try {
    console.log(`Fetching posts from: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
      return [];
    }
    const posts = await response.json();
    console.log(`Successfully fetched ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
};

// Function to fetch post by ID
export const fetchPostById = async (id: number): Promise<WordPressPost | null> => {
  try {
    console.log(`Fetching post by ID: ${id}`);
    const response = await fetch(`${WP_API_BASE_URL}/posts/${id}?_embed`);
    if (!response.ok) {
      console.error(`Failed to fetch post by ID: ${response.status} ${response.statusText}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    return null;
  }
};

// Function to fetch post by slug
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    console.log(`Fetching post by slug: ${slug}`);
    const response = await fetch(`${WP_API_BASE_URL}/posts?slug=${slug}&_embed`);
    if (!response.ok) {
      console.error(`Failed to fetch post by slug: ${response.status} ${response.statusText}`);
      return null;
    }
    const posts = await response.json();
    if (posts.length === 0) {
      console.error(`Post not found with slug: ${slug}`);
      return null;
    }
    return posts[0];
  } catch (error) {
    console.error("Error fetching WordPress post by slug:", error);
    return null;
  }
};

// Function to fetch categories from WordPress
export const fetchCategories = async (): Promise<WordPressCategory[]> => {
  try {
    console.log(`Fetching categories`);
    const response = await fetch(`${WP_API_BASE_URL}/categories?per_page=100`);
    if (!response.ok) {
      console.error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
      return [];
    }
    const categories = await response.json();
    console.log(`Successfully fetched ${categories.length} categories`);
    return categories;
  } catch (error) {
    console.error("Error fetching WordPress categories:", error);
    return [];
  }
};

// Function to fetch site settings from WordPress
export const fetchSiteSettings = async (): Promise<WordPressSiteSettings> => {
  try {
    console.log(`Fetching site settings`);
    // We can use the root endpoint for settings or a specific endpoint if you have one
    const response = await fetch(`${WP_API_BASE_URL.replace('/wp/v2', '')}`);
    if (!response.ok) {
      console.error(`Failed to fetch site settings: ${response.status} ${response.statusText}`);
      return defaultSiteSettings;
    }
    
    const data = await response.json();
    
    // Extract relevant information from WordPress API response
    return {
      title: data.name || defaultSiteSettings.title,
      description: data.description || defaultSiteSettings.description,
      logo: defaultSiteSettings.logo, // WordPress API doesn't provide logo by default
      favicon: defaultSiteSettings.favicon // WordPress API doesn't provide favicon by default
    };
  } catch (error) {
    console.error("Error fetching WordPress site settings:", error);
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
    console.log(`Fetching posts infinite, page: ${pageParam}, category: ${categoryId}`);
    const posts = await fetchPosts(categoryId, pageParam);
    return { 
      posts, 
      nextPage: posts.length === 10 ? pageParam + 1 : null 
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return {
      posts: [],
      nextPage: null
    };
  }
};
