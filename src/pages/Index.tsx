
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Clock } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  useWordPressPosts, 
  useWordPressCategories, 
  stripHtml, 
  formatWordPressDate, 
  getCategoryFromPost, 
  getFeaturedImageUrl 
} from "@/services/wordpressApi";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatingPosts, setAnimatingPosts] = useState(false);
  const { toast } = useToast();

  // Fetch posts and categories
  const { data: postsData, isLoading: postsLoading, error: postsError } = useWordPressPosts();
  const { data: categoriesData = [], isLoading: categoriesLoading } = useWordPressCategories();

  // Extract posts from infinite query data
  const posts = postsData?.pages?.flatMap(page => page.posts) || [];

  // Format categories for display
  const categories = [
    { id: 0, name: "Всички", slug: "all" },
    ...(categoriesData || []).map(cat => ({ 
      id: cat.id, 
      name: cat.name, 
      slug: cat.slug 
    })),
  ];

  // Filter posts by category
  const [visiblePosts, setVisiblePosts] = useState([]);

  // When posts or active category changes, filter posts
  useEffect(() => {
    if (!posts.length) return;
    
    setAnimatingPosts(true);
    
    setTimeout(() => {
      if (activeCategory === "all") {
        setVisiblePosts(posts);
      } else {
        const categoryId = categories.find(cat => cat.slug === activeCategory)?.id;
        setVisiblePosts(posts.filter(post => 
          categoryId ? post.categories.includes(categoryId) : true
        ));
      }
      setAnimatingPosts(false);
    }, 300);
  }, [posts, activeCategory, categories]);

  // Show errors
  useEffect(() => {
    if (postsError) {
      toast({
        variant: "destructive",
        title: "Грешка при зареждане на статиите",
        description: "Моля, опитайте по-късно или свържете се с администратора."
      });
    }
  }, [postsError, toast]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Херо секция */}
      <section className="py-24 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Открий най-добрите </span>
            <span className="text-green-500">намаления</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Най-добрите отстъпки и промоции около теб – избери и спести!
          </p>
        </div>
      </section>

      {/* Последни статии - Иновативна секция */}
      <section className="py-16 bg-gradient-to-t from-black via-green-950/5 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Последни </span>
              <span className="text-green-500">статии</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Открийте полезна информация, съвети и стратегии за намиране на най-добрите оферти и спестяване на пари
            </p>
          </div>

          {/* Табове за категории */}
          {!categoriesLoading && (
            <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveCategory}>
              <div className="flex justify-center mb-6 overflow-x-auto no-scrollbar">
                <TabsList className="bg-gray-900/70 p-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.slug}
                      className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=inactive]:text-gray-400"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Съдържание за всеки таб */}
              <TabsContent value={activeCategory} className="mt-0">
                {postsLoading ? (
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
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${animatingPosts ? 'opacity-0' : 'opacity-100'}`}>
                    {visiblePosts.map((post, index) => (
                      <Link to={`/blog/${post.id}/${post.slug}`} key={post.id} className="group">
                        <Card className={`h-full bg-gray-900/60 border-gray-800 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1 ${index === 0 && !isMobile ? 'md:col-span-2 md:row-span-2' : ''}`}>
                          <div className={`relative overflow-hidden ${index === 0 && !isMobile ? 'md:h-64' : 'h-48'}`}>
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
                )}
              </TabsContent>
            </Tabs>
          )}

          <div className="text-center mt-10">
            <Link to="/blog">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Всички статии
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Информация за блога */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">Нашият </span>
            <span className="text-green-500">Блог</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Посетете нашия блог за полезни съвети, идеи за спестяване и информация за най-новите промоции
          </p>
          
          <Link to="/blog">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Към блога
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
