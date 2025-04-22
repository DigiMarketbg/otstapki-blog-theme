
import { useQuery } from "@tanstack/react-query";

// Interface for WordPress post data
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
  categories: number[];
}

// Function to fetch posts from WordPress
export const fetchPosts = async (categoryId?: number): Promise<WordPressPost[]> => {
  const baseUrl = "https://yourdomain.com/wp-json/wp/v2"; // Replace with your WordPress URL
  let url = `${baseUrl}/posts?_embed&per_page=10`;
  
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
    return [];
  }
};

// Function to fetch a single post by ID
export const fetchPostById = async (id: number): Promise<WordPressPost | null> => {
  const baseUrl = "https://yourdomain.com/wp-json/wp/v2"; // Replace with your WordPress URL
  
  try {
    const response = await fetch(`${baseUrl}/posts/${id}?_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    return null;
  }
};

// Function to fetch a single post by slug
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  const baseUrl = "https://yourdomain.com/wp-json/wp/v2"; // Replace with your WordPress URL
  
  try {
    const response = await fetch(`${baseUrl}/posts?slug=${slug}&_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress post by slug:", error);
    return null;
  }
};

// Function to fetch categories
export const fetchCategories = async () => {
  const baseUrl = "https://yourdomain.com/wp-json/wp/v2"; // Replace with your WordPress URL
  
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress categories:", error);
    return [];
  }
};

// React Query hook for posts
export const useWordPressPosts = (categoryId?: number) => {
  return useQuery({
    queryKey: ['posts', categoryId],
    queryFn: () => fetchPosts(categoryId),
  });
};

// React Query hook for single post
export const useWordPressPost = (id: number) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
};

// React Query hook for post by slug
export const useWordPressPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });
};

// React Query hook for categories
export const useWordPressCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

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
