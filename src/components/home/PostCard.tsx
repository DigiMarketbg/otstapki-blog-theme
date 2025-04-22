
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Clock } from 'lucide-react';
import { WordPressPost, stripHtml, formatWordPressDate, getCategoryFromPost } from "@/services/wordpressApi";

interface PostCardProps {
  post: WordPressPost;
  index: number;
  isMobile: boolean;
}

const PostCard = ({ post, index, isMobile }: PostCardProps) => {
  // Get featured image URL with fallback
  const getFeaturedImageUrl = (post: WordPressPost): string => {
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return "/placeholder.svg";
  };

  return (
    <Link to={`/blog/${post.id}/${post.slug}`} className="group">
      <Card className={`h-full bg-gray-900/60 border-gray-800 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1 ${index === 0 && !isMobile ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className={`relative overflow-hidden ${index === 0 && !isMobile ? 'md:h-64' : 'h-48'}`}>
          <img 
            src={getFeaturedImageUrl(post)} 
            alt={post.title.rendered} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
          <Badge className="absolute top-3 left-3 bg-green-500/90 text-white border-none">
            {getCategoryFromPost(post)}
          </Badge>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/80">
            <Clock className="h-3 w-3" />
            <span>{formatWordPressDate(post.date)}</span>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors duration-300">
            {post.title.rendered}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400 line-clamp-2">
            {stripHtml(post.excerpt.rendered)}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between items-center">
          <Button variant="link" className="p-0 text-green-500 group-hover:text-green-400 transition-colors flex items-center gap-1">
            Прочети повече
            <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
