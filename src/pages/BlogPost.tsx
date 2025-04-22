
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { 
  useWordPressPost, 
  useWordPressCategories, 
  useWordPressPosts, 
  formatWordPressDate, 
  getCategoryFromPost, 
  getFeaturedImageUrl, 
  stripHtml 
} from "@/services/wordpressApi";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id: postIdStr, seoTitle } = useParams();
  const postId = parseInt(postIdStr || '0');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch post data
  const { data: post, isLoading: postLoading, error: postError } = useWordPressPost(postId);
  // Fetch categories for navigation
  const { data: categories = [] } = useWordPressCategories();
  // Fetch recent posts for related articles
  const { data: recentPostsData } = useWordPressPosts();
  
  // Extract recent posts from infinite query data
  const recentPosts = recentPostsData?.pages?.flatMap(page => page.posts) || [];

  // Filter out current post from related posts
  const relatedPosts = recentPosts
    .filter(relatedPost => relatedPost.id !== postId)
    .slice(0, 3);

  // Show errors
  useEffect(() => {
    if (postError) {
      toast({
        variant: "destructive",
        title: "Грешка при зареждане на статията",
        description: "Моля, опитайте по-късно или свържете се с администратора."
      });
      navigate('/blog');
    }
  }, [postError, toast, navigate]);

  // Check if slug in URL matches the post slug and redirect if needed
  useEffect(() => {
    if (post && seoTitle && post.slug !== seoTitle) {
      navigate(`/blog/${postId}/${post.slug}`, { replace: true });
    }
  }, [post, seoTitle, postId, navigate]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8 flex-grow">
        {postLoading ? (
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-800 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-800 rounded w-1/2 mb-8"></div>
              <div className="h-72 bg-gray-800 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 bg-gray-800 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ) : post ? (
          <>
            <div className="max-w-4xl mx-auto mb-8">
              <Link to="/blog" className="inline-flex items-center text-green-500 hover:text-green-400">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Назад към блога
              </Link>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <Link 
                to={`/blog/category/${
                  post._embedded?.['wp:term']?.[0]?.[0]?.slug || (categories[0]?.slug || '')
                }`}
                className="inline-block"
              >
                <Badge className="bg-green-500 text-white border-none mb-4">
                  {getCategoryFromPost(post)}
                </Badge>
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title.rendered}
              </h1>
              
              <div className="flex items-center text-gray-400 mb-8">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{formatWordPressDate(post.date)}</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={getFeaturedImageUrl(post)} 
                  alt={post.title.rendered}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div 
                className="prose prose-lg prose-invert prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="text-white">Още </span>
                  <span className="text-green-500">статии</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link to={`/blog/${relatedPost.id}/${relatedPost.slug}`} key={relatedPost.id} className="group">
                      <Card className="h-full bg-gray-900/60 border-gray-800 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                        <div className="relative overflow-hidden h-40">
                          <img 
                            src={getFeaturedImageUrl(relatedPost)} 
                            alt={relatedPost.title.rendered}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
                          <Badge className="absolute top-3 left-3 bg-green-500/90 text-white border-none">
                            {getCategoryFromPost(relatedPost)}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-white group-hover:text-green-400 transition-colors duration-300">
                            {relatedPost.title.rendered}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-400 line-clamp-2">
                            {stripHtml(relatedPost.excerpt.rendered)}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="link" className="p-0 text-green-500 group-hover:text-green-400 transition-colors flex items-center gap-1">
                            Прочети повече
                            <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-3xl font-bold mb-4">Статията не е намерена</h2>
            <p className="text-gray-400 mb-8">Съжаляваме, но статията, която търсите, не съществува или е била премахната.</p>
            <Link to="/blog">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Към блога
              </Button>
            </Link>
          </div>
        )}
      </div>

      <style>
        {`
          .prose img {
            border-radius: 0.5rem;
            margin: 2rem 0;
          }
          
          .prose h2 {
            color: white;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          .prose h3 {
            color: #10b981;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .prose p {
            margin-bottom: 1.25rem;
          }
          
          .prose strong {
            color: #10b981;
          }
          
          .prose a {
            color: #10b981;
            text-decoration: underline;
          }
          
          .prose ul, .prose ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .prose li {
            margin-bottom: 0.5rem;
          }
        `}
      </style>
      <Footer />
    </div>
  );
};

export default BlogPost;
