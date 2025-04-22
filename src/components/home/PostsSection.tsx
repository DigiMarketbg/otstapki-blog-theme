
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  useWordPressPosts, 
  useWordPressCategories
} from "@/services/wordpressApi";
import { useToast } from "@/hooks/use-toast";
import PostsGrid from './PostsGrid';

const PostsSection = () => {
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
              <PostsGrid 
                posts={visiblePosts} 
                isLoading={postsLoading} 
                animating={animatingPosts} 
              />
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
  );
};

export default PostsSection;
