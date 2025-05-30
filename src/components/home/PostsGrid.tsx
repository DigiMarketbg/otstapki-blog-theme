
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PostCard from './PostCard';
import { WordPressPost } from '@/services/api/types';
import { useIsMobile } from '@/hooks/use-mobile';

interface PostsGridProps {
  posts: WordPressPost[];
  isLoading: boolean;
  animating: boolean;
}

const PostsGrid = ({ posts, isLoading, animating }: PostsGridProps) => {
  const isMobile = useIsMobile();
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-full bg-gray-900/60 border-gray-800 animate-pulse">
            <div className="h-48 bg-gray-800"></div>
            <CardHeader className="pb-2">
              <div className="h-6 bg-gray-800 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  // Debug info
  console.log("Rendering PostsGrid with", posts.length, "posts");
  
  // If there are no posts, show a message
  if (posts.length === 0 && !isLoading) {
    return (
      <div className="text-center py-12 border border-gray-800 rounded-lg bg-gray-900/30 px-4">
        <h3 className="text-2xl text-gray-400 mb-4">Няма публикувани статии</h3>
        <p className="text-gray-500 mb-6">
          В момента няма публикувани статии. Моля, проверете по-късно за нови публикации.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
      {posts.map((post, index) => (
        <PostCard 
          key={post.id} 
          post={post} 
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default PostsGrid;
