
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { 
  fetchSiteSettings, 
  fetchPostsInfinite, 
  fetchPostById, 
  fetchPostBySlug, 
  fetchCategories 
} from './wordpress';
import { WordPressPost, WordPressSiteSettings, WordPressCategory } from './types';

// React Query hook for site settings
export const useWordPressSiteSettings = () => {
  return useQuery<WordPressSiteSettings, Error>({
    queryKey: ['site-settings'],
    queryFn: fetchSiteSettings,
  });
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
  return useQuery<WordPressPost, Error>({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
};

// React Query hook for post by slug
export const useWordPressPostBySlug = (slug: string) => {
  return useQuery<WordPressPost, Error>({
    queryKey: ['post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });
};

// React Query hook for categories
export const useWordPressCategories = () => {
  return useQuery<WordPressCategory[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
