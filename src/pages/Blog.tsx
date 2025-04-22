import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Clock } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { 
  useWordPressPosts, 
  useWordPressCategories, 
  stripHtml, 
  formatWordPressDate, 
  getCategoryFromPost, 
  getFeaturedImageUrl 
} from "@/services/wordpressApi";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { category: categorySlug } = useParams<{ category?: string }>();
  const { toast } = useToast();
  
  // Fetch categories
  const { data: categories = [] } = useWordPressCategories();
  
  // Get the category ID from the slug
  const categoryId = categorySlug 
    ? categories.find(cat => cat.slug === categorySlug)?.id 
    : undefined;

  // Fetch posts with infinite scrolling
  const { 
    data, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage, 
    isLoading, 
    error 
  } = useWordPressPosts(categoryId);

  // Extract all posts from the pages
  const posts = data?.pages?.flatMap(page => page.posts) || [];

  // Show errors
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Грешка при зареждане на статиите",
        description: "Моля, опитайте по-късно или свържете се с администратора."
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {categorySlug ? (
              <>
                <span className="text-white">Статии в категория </span>
                <span className="text-green-500">
                  {categories.find(cat => cat.slug === categorySlug)?.name || categorySlug}
                </span>
              </>
            ) : (
              <>
                <span className="text-white">Блог | </span>
                <span className="text-green-500">Всички статии</span>
              </>
            )}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Открийте полезна информация, съвети и стратегии за намиране на най-добрите оферти
          </p>
        </div>
      </section>

      {/* Categories Nav */}
      <section className="py-6 bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <Link to="/blog">
              <Button 
                variant={!categorySlug ? "default" : "outline"} 
                className={!categorySlug 
                  ? "bg-green-500 hover:bg-green-600 text-white" 
                  : "text-gray-300 hover:text-white border-gray-700 hover:bg-gray-800"
                }
              >
                Всички
              </Button>
            </Link>
            
            {categories.map(category => (
              <Link key={category.id} to={`/blog/category/${category.slug}`}>
                <Button 
                  variant={categorySlug === category.slug ? "default" : "outline"}
                  className={categorySlug === category.slug 
                    ? "bg-green-500 hover:bg-green-600 text-white" 
                    : "text-gray-300 hover:text-white border-gray-700 hover:bg-gray-800"
                  }
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gradient-to-t from-black via-green-950/5 to-black flex-grow">
        <div className="container mx-auto px-4">
          {isLoading ? (
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
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link to={`/blog/${post.id}/${post.slug}`} key={post.id} className="group">
                    <Card className="h-full bg-gray-900/60 border-gray-800 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1">
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={getFeaturedImageUrl(post)} 
                          alt={post.title.rendered} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                ))}
              </div>

              {hasNextPage && (
                <div className="flex justify-center mt-10">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    {isFetchingNextPage ? "Зареждане..." : "Зареди още"}
                  </Button>
                </div>
              )}
            </>
          )}

          {posts.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <h3 className="text-2xl text-gray-400 mb-4">Няма намерени статии</h3>
              <p className="text-gray-500 mb-6">
                В момента няма публикувани статии в тази категория.
              </p>
              <Link to="/blog">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Към всички статии
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
