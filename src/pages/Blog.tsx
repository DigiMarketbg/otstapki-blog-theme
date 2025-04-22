
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search } from 'lucide-react';

// Примерни блог статии
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
  {
    id: 5,
    title: "5 често срещани грешки при използване на промоционални кодове",
    excerpt: "Научете как да избегнете типичните капани при използване на ваучери и промо кодове онлайн.",
    category: "Онлайн пазаруване",
    date: "5 април, 2025",
    imageUrl: "/placeholder.svg",
  },
];

// Категории за блога
const categories = [
  "Всички",
  "Промоции",
  "Съвети за пестене",
  "Онлайн пазаруване",
  "Технологии",
  "Сезонни оферти",
];

const Blog = () => {
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
            <span className="text-green-500 font-bold text-xl">Блог</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-green-500 transition">Начало</Link>
            <Link to="/blog" className="text-green-500 border-b-2 border-green-500 pb-1">Блог</Link>
          </nav>
        </div>
      </header>

      {/* Херо секция */}
      <section className="py-16 bg-gradient-to-b from-black to-green-950/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Открий най-добрите </span>
            <span className="text-green-500">съвети и промоции</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Информативни статии, полезни съвети и актуална информация за намаления и оферти в България
          </p>
          
          {/* Търсачка */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Търси статии, съвети, промоции..."
              className="w-full py-3 px-6 pr-12 rounded-full bg-gray-800 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            />
            <Button className="absolute right-1 top-1 rounded-full bg-green-500 hover:bg-green-600 p-2">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-6 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-green-500 hover:bg-green-600 text-white whitespace-nowrap" 
                  : "border-green-500/50 text-green-500 hover:bg-green-500/10 whitespace-nowrap"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Блог статии */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-green-500 pl-4">Последни публикации</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition overflow-hidden hover:shadow-lg hover:shadow-green-500/10">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-green-400 border-green-400/30">
                      {post.category}
                    </Badge>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-green-500 transition">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="link" className="text-green-500 hover:text-green-400 p-0">
                    Прочети повече
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Зареди още статии
            </Button>
          </div>
        </div>
      </section>

      {/* Популярни публикации */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-green-500 pl-4">Популярни публикации</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <Badge variant="outline" className="text-green-400 border-green-400/30 mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 hover:text-green-500 transition">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <Button variant="link" className="text-green-500 hover:text-green-400 p-0">
                        Прочети повече
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Абонамент */}
      <section className="py-16 bg-gradient-to-t from-black to-green-950/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Абонирайте се за нашия </span>
            <span className="text-green-500">бюлетин</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Получавайте най-новите статии и промоции директно във вашата поща. Никакъм спам, само най-полезната информация!
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Вашият имейл адрес"
              className="flex-1 py-3 px-4 rounded-l-lg bg-gray-800 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-r-lg">
              Абонирай се
            </Button>
          </div>
        </div>
      </section>

      {/* Футър */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img 
                  src="/lovable-uploads/2ef37924-9ab4-43ad-9b1f-cb1a6780ce3d.png" 
                  alt="Отстъпки БГ Лого" 
                  className="h-10"
                />
                <span className="text-green-500 font-bold text-xl">Отстъпки БГ</span>
              </Link>
              <p className="mb-4">
                Най-добрите отстъпки и промоции около теб – избери и спести!
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-green-500 transition">Начало</Link></li>
                <li><Link to="/blog" className="hover:text-green-500 transition">Блог</Link></li>
                <li><a href="#" className="hover:text-green-500 transition">За нас</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Контакти</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Категории</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== "Всички").map((category, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-500 transition">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Контакти</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>support@otstapki.bg</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+359 888 123 456</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center">
            <p>© 2025 Отстъпки БГ. Всички права запазени.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
