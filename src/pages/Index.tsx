
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Clock, User } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

// Примерни блог статии (същите като в Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "10 начина да спестите от месечните разходи",
    excerpt: "Открийте изпитани стратегии за намаляване на ежедневните разходи без да жертвате качеството на живот.",
    category: "Съвети за пестене",
    date: "21 април, 2025",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Най-добрите намаления в хранителните вериги този месец",
    excerpt: "Преглед на топ промоциите в големите хранителни вериги, които не трябва да пропускате през април.",
    category: "Промоции",
    date: "18 април, 2025",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Как да намерите най-изгодните оферти за техника",
    excerpt: "Експертни съвети за откриване на най-добрите намаления при покупка на смартфони, компютри и домакински уреди.",
    category: "Технологии",
    date: "15 април, 2025",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Сезонни намаления - какво да купувате през пролетта",
    excerpt: "Разберете кои продукти са най-изгодни за покупка през пролетния сезон и защо.",
    category: "Сезонни оферти",
    date: "10 април, 2025",
    imageUrl: "/placeholder.svg",
  },
];

// Категории за филтриране
const categories = [
  "Всички",
  "Промоции",
  "Съвети за пестене",
  "Технологии",
  "Сезонни оферти",
];

const Index = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("Всички");
  const [visiblePosts, setVisiblePosts] = useState(blogPosts);
  const [animatingPosts, setAnimatingPosts] = useState(false);

  // Филтриране на статии според избраната категория
  useEffect(() => {
    setAnimatingPosts(true);
    
    setTimeout(() => {
      if (activeCategory === "Всички") {
        setVisiblePosts(blogPosts);
      } else {
        setVisiblePosts(blogPosts.filter(post => post.category === activeCategory));
      }
      setAnimatingPosts(false);
    }, 300);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Хедър */}
      <header className="bg-black py-4 border-b border-green-500/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/2ef37924-9ab4-43ad-9b1f-cb1a6780ce3d.png" 
              alt="Отстъпки БГ Лого" 
              className="h-10"
            />
            <span className="text-green-500 font-bold text-xl">Отстъпки БГ</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-green-500 border-b-2 border-green-500 pb-1">Начало</Link>
            <Link to="/blog" className="text-white hover:text-green-500 transition">Блог</Link>
          </nav>
        </div>
      </header>

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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Близки оферти
            </Button>
            <Button className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10">
              Гласово търсене
            </Button>
          </div>
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
          <Tabs defaultValue="Всички" className="w-full mb-8" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-900/70 p-1">
                {categories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category}
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=inactive]:text-gray-400"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Съдържание за всеки таб */}
            <TabsContent value={activeCategory} className="mt-0">
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${animatingPosts ? 'opacity-0' : 'opacity-100'}`}>
                {visiblePosts.map((post, index) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="group">
                    <Card className={`h-full bg-gray-900/60 border-gray-800 group-hover:border-green-500/50 transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1 ${index === 0 && !isMobile ? 'md:col-span-2 md:row-span-2' : ''}`}>
                      <div className={`relative overflow-hidden ${index === 0 && !isMobile ? 'md:h-64' : 'h-48'}`}>
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
                        <Badge className="absolute top-3 left-3 bg-green-500/90 text-white border-none">{post.category}</Badge>
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/80">
                          <Clock className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors duration-300">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400 line-clamp-2">{post.excerpt}</CardDescription>
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
            </TabsContent>
          </Tabs>

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
