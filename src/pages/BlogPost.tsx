
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Percent, Tag, User } from 'lucide-react';

// Примерни блог статии
const blogPosts = [
  {
    id: 1,
    title: "10 начина да спестите от месечните разходи",
    excerpt: "Открийте изпитани стратегии за намаляване на ежедневните разходи без да жертвате качеството на живот.",
    content: `
      <p>В наши дни, когато цените постоянно растат, намирането на начини за спестяване на пари от месечните разходи е особено важно. В тази статия ще разгледаме 10 ефективни стратегии, които могат да помогнат на всяко домакинство да оптимизира бюджета си.</p>
      
      <h2>1. Планирайте пазаруването предварително</h2>
      <p>Спонтанното пазаруване често води до ненужни покупки. Направете списък с необходимите продукти и се придържайте към него. Проверявайте седмичните брошури и планирайте менюто си според намаленията.</p>
      
      <h2>2. Използвайте приложения за намаления</h2>
      <p>Приложения като Отстъпки БГ могат да ви помогнат да откриете най-добрите промоции около вас. Редовното използване на подобни инструменти може да доведе до значителни спестявания в дългосрочен план.</p>
      
      <h2>3. Оптимизирайте енергийното потребление</h2>
      <p>Сметките за електричество, вода и отопление съставляват голяма част от месечните разходи. Използването на енергоспестяващи крушки, изключването на електроуреди от контакта, когато не се използват, и разумното използване на вода могат да намалят сметките ви с 10-20%.</p>
      
      <h2>4. Преразгледайте абонаментите си</h2>
      <p>Проверете всички месечни абонаменти - стрийминг услуги, телевизия, телефон, интернет, фитнес и т.н. Анализирайте дали наистина използвате всички тези услуги и дали не можете да намерите по-изгодни пакети.</p>
      
      <h2>5. Приготвяйте храна вкъщи</h2>
      <p>Храненето навън е удобно, но скъпо. Отделете време за приготвяне на храна вкъщи. Можете да приготвяте по-големи количества и да замразявате за по-късно, което спестява и време, и пари.</p>
      
      <h2>6. Използвайте промоционални кодове при онлайн пазаруване</h2>
      <p>Преди да завършите онлайн покупка, потърсете промоционални кодове за съответния магазин. Сайтове и приложения като Отстъпки БГ често предлагат актуални кодове, които могат да намалят крайната цена с 5-30%.</p>
      
      <h2>7. Преминете към собствена марка продукти</h2>
      <p>Продуктите с марката на търговските вериги често са произведени от същите производители като известните марки, но на по-ниска цена. Тествайте различни продукти и вижте къде не забелязвате разлика в качеството.</p>
      
      <h2>8. Използвайте обществен транспорт или споделено пътуване</h2>
      <p>Разходите за гориво, паркинг и поддръжка на автомобил са значителни. Когато е възможно, използвайте обществен транспорт, велосипед или споделено пътуване.</p>
      
      <h2>9. Планирайте големи покупки според сезонните намаления</h2>
      <p>Различните продукти имат различни цикли на намаление. Електроника след нови модели, дрехи в края на сезона, мебели преди нови колекции. Планирайте големите покупки според тези цикли.</p>
      
      <h2>10. Създайте бюджет и го следвайте</h2>
      <p>И най-важното - създайте ясен месечен бюджет, който включва всички ваши разходи и спестявания. Следете го редовно и правете корекции, когато е необходимо.</p>
      
      <p>Прилагането на тези стратегии може да доведе до значителни спестявания в дългосрочен план, без да се налага да правите големи жертви в начина си на живот. Започнете с малки промени и постепенно изграждайте нови навици за пестене.</p>
    `,
    category: "Съвети за пестене",
    author: "Мария Иванова",
    date: "21 април, 2025",
    readTime: "7 мин",
    imageUrl: "/placeholder.svg",
    discountPercentage: "20%",
    relatedPosts: [2, 5, 3]
  },
  {
    id: 2,
    title: "Най-добрите намаления в хранителните вериги този месец",
    excerpt: "Преглед на топ промоциите в големите хранителни вериги, които не трябва да пропускате през април.",
    content: `<p>Подробно съдържание за статия 2...</p>`,
    category: "Промоции",
    author: "Петър Петров",
    date: "18 април, 2025",
    readTime: "5 мин",
    imageUrl: "/placeholder.svg",
    discountPercentage: "30%",
    relatedPosts: [1, 4, 5]
  },
  {
    id: 3,
    title: "Как да намерите най-изгодните оферти за техника",
    excerpt: "Експертни съвети за откриване на най-добрите намаления при покупка на смартфони, компютри и домакински уреди.",
    content: `<p>Подробно съдържание за статия 3...</p>`,
    category: "Технологии",
    author: "Стефан Тодоров",
    date: "15 април, 2025",
    readTime: "8 мин",
    imageUrl: "/placeholder.svg",
    discountPercentage: "15%",
    relatedPosts: [2, 5, 1]
  },
  {
    id: 4,
    title: "Сезонни намаления - какво да купувате през пролетта",
    excerpt: "Разберете кои продукти са най-изгодни за покупка през пролетния сезон и защо.",
    content: `<p>Подробно съдържание за статия 4...</p>`,
    category: "Сезонни оферти",
    author: "Виктория Димитрова",
    date: "10 април, 2025",
    readTime: "6 мин",
    imageUrl: "/placeholder.svg",
    discountPercentage: "25%",
    relatedPosts: [1, 2, 3]
  },
  {
    id: 5,
    title: "5 често срещани грешки при използване на промоционални кодове",
    excerpt: "Научете как да избегнете типичните капани при използване на ваучери и промо кодове онлайн.",
    content: `<p>Подробно съдържание за статия 5...</p>`,
    category: "Онлайн пазаруване",
    author: "Николай Иванов",
    date: "5 април, 2025",
    readTime: "4 мин",
    imageUrl: "/placeholder.svg",
    discountPercentage: "10%",
    relatedPosts: [1, 2, 3]
  },
];

// Функция за създаване на SEO URL
const createSeoUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\sа-яА-Я]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-а-яА-Я]/g, '')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "1");
  
  // Намиране на статията по ID
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];
  
  // Намиране на свързани статии
  const relatedArticles = post.relatedPosts.map(id => 
    blogPosts.find(p => p.id === id)
  ).filter(Boolean);

  // Генериране на SEO URL за статията
  const seoUrl = createSeoUrl(post.title);

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
            <Link to="/blog" className="text-white hover:text-green-500 transition">Блог</Link>
          </nav>
        </div>
      </header>

      {/* Основно съдържание */}
      <main className="py-12">
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Хлебни трохи */}
            <div className="text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-green-500 transition">Начало</Link>
              {" > "}
              <Link to="/blog" className="hover:text-green-500 transition">Блог</Link>
              {" > "}
              <Link to={`/blog/category/${post.category}`} className="hover:text-green-500 transition">{post.category}</Link>
              {" > "}
              <span className="text-white">{seoUrl}</span>
            </div>
            
            {/* Заглавие и мета информация */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            {/* Дисконт етикет - нова функционалност */}
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-700 px-4 py-2 rounded-lg animate-pulse transform rotate-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-white" />
                  <span className="text-white font-bold">Спести до {post.discountPercentage}</span>
                  <Tag className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="text-green-400 border-green-400/30 flex items-center gap-1">
                <User className="h-3 w-3" /> {post.author}
              </Badge>
              <Badge variant="outline" className="text-amber-400 border-amber-400/30 flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.date}
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-400/30 flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readTime} четене
              </Badge>
            </div>
            
            {/* Основно изображение */}
            <div className="mb-8 rounded-xl overflow-hidden relative">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
              {/* Ефект за намаление върху изображението */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold transform rotate-12 shadow-lg border-2 border-white">
                -{post.discountPercentage}
              </div>
            </div>
            
            {/* Съдържание на статията */}
            <div 
              className="prose prose-lg prose-invert max-w-none prose-headings:text-green-500 prose-a:text-green-400 prose-strong:text-white prose-blockquote:border-green-500 prose-blockquote:text-gray-300 prose-hr:border-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Тагове и споделяне */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                  {post.category}
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                  Спестяване
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                  Бюджет
                </Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Споделете:</span>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <Separator className="my-12 bg-gray-800" />
            
            {/* Автор */}
            <div className="bg-gray-900 rounded-xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={post.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-400 mb-3">
                  Експерт по лични финанси и управление на бюджета с над 8 години опит в сферата
                  на финансовите консултации.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a href="#" className="text-green-500 hover:text-green-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-green-500 hover:text-green-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Свързани статии */}
          <section className="mt-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">
                Свързани статии
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedPost) => (
                  <Card key={relatedPost?.id} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition overflow-hidden group">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={relatedPost?.imageUrl} 
                        alt={relatedPost?.title} 
                        className="w-full h-full object-cover transition group-hover:scale-105"
                      />
                      {/* Ефект за намаление върху изображението на свързаната статия */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full font-bold transform rotate-12 shadow-lg border border-white text-sm">
                        -{relatedPost?.discountPercentage}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="text-green-400 border-green-400/30">
                          {relatedPost?.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">{relatedPost?.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-green-500 transition">
                        <Link to={`/blog/${relatedPost?.id}/${createSeoUrl(relatedPost?.title || '')}`}>{relatedPost?.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400">{relatedPost?.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link to={`/blog/${relatedPost?.id}/${createSeoUrl(relatedPost?.title || '')}`}>
                        <div className="text-green-500 hover:text-green-400 flex items-center gap-2">
                          <Percent className="h-4 w-4" />
                          <span>Виж намалението</span>
                        </div>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Абонамент */}
          <section className="py-16 mt-16 bg-gradient-to-t from-black to-green-950/10">
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
        </article>
      </main>

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
                <li><a href="#" className="hover:text-green-500 transition">Промоции</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Съвети за пестене</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Онлайн пазаруване</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Технологии</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Сезонни оферти</a></li>
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

export default BlogPost;
