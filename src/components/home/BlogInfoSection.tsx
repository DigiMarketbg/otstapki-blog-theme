
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const BlogInfoSection = () => {
  return (
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
  );
};

export default BlogInfoSection;
