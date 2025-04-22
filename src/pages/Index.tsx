
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
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

      {/* Блог секция */}
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
