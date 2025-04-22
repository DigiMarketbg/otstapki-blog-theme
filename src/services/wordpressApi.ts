
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

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

// Default category list for development
export const defaultCategories = [
  { id: 1, name: "Отстъпки", slug: "discounts" },
  { id: 2, name: "Финанси", slug: "finance" },
  { id: 3, name: "Технологии", slug: "technology" },
  { id: 4, name: "Лайфстайл", slug: "lifestyle" }
];

// Function to fetch posts from WordPress
export const fetchPosts = async (categoryId?: number, page: number = 1): Promise<WordPressPost[]> => {
  const baseUrl = "https://yourdomain.com/wp-json/wp/v2"; // Replace with your WordPress URL
  let url = `${baseUrl}/posts?_embed&per_page=10&page=${page}`;
  
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
    // For development, return mock data
    return generateMockPost(id);
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
    // For development, return default categories
    return defaultCategories;
  }
};

// React Query hook for posts (infinite scroll)
export const useWordPressPosts = (categoryId?: number) => {
  return useInfiniteQuery({
    queryKey: ['posts', categoryId],
    queryFn: fetchPostsInfinite,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1
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

// Mock data generation for development
function generateMockPost(id: number): WordPressPost {
  const categoryId = Math.floor(Math.random() * 4) + 1;
  const category = defaultCategories.find(cat => cat.id === categoryId) || defaultCategories[0];
  
  return {
    id,
    date: new Date().toISOString(),
    title: {
      rendered: `Примерна статия ${id}: Как да спестите пари с нашите промоции`
    },
    excerpt: {
      rendered: '<p>Това е кратко резюме на статията, което описва основните точки и цели да привлече читателите...</p>'
    },
    content: {
      rendered: `
        <h2>Въведение</h2>
        <p>Това е подробно съдържание на статията, което включва полезни съвети за спестяване на пари и намиране на най-добрите промоции.</p>
        <h3>Първи съвет</h3>
        <p>Следете редовно нашия сайт за най-новите отстъпки и промоции от водещи магазини и брандове.</p>
        <h3>Втори съвет</h3>
        <p>Абонирайте се за нашия бюлетин, за да получавате известия за ексклузивни оферти директно във вашата поща.</p>
        <p>Използвайте промо код: <strong>SAVE20</strong> за допълнителна отстъпка от 20% при първа поръчка.</p>
      `
    },
    slug: `primerna-statiya-${id}-kak-da-spestite-pari`,
    featured_media: id,
    categories: [categoryId],
    _embedded: {
      'wp:featuredmedia': [
        {
          source_url: '/placeholder.svg'
        }
      ],
      'wp:term': [
        [
          {
            id: categoryId,
            name: category.name,
            slug: category.slug
          }
        ]
      ]
    }
  };
}

function generateMockPosts(count: number, categoryId?: number): WordPressPost[] {
  return Array.from({ length: count }).map((_, index) => {
    const post = generateMockPost(index + 1);
    
    if (categoryId) {
      post.categories = [categoryId];
      const category = defaultCategories.find(cat => cat.id === categoryId);
      if (category && post._embedded && post._embedded['wp:term']) {
        post._embedded['wp:term'][0] = [{
          id: categoryId,
          name: category.name,
          slug: category.slug
        }];
      }
    }
    
    return post;
  });
}
