
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWordPressSiteSettings } from '@/services/wordpressApi';

const SiteHeader = () => {
  const location = useLocation();
  const { data: siteSettings = { title: "Отстъпки БГ", logo: "/lovable-uploads/6cbb2d8a-6ad4-48cf-bdd4-443bd16a25c8.png" } } = useWordPressSiteSettings();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black py-4 border-b border-green-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={siteSettings.logo} 
            alt={`${siteSettings.title} Лого`} 
            className="h-12"
          />
          <span className="text-green-500 font-bold text-xl">{siteSettings.title}</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={isActive('/') 
              ? "text-green-500 border-b-2 border-green-500 pb-1" 
              : "text-white hover:text-green-500 transition"}
          >
            Начало
          </Link>
          <Link 
            to="/blog" 
            className={isActive('/blog') || location.pathname.startsWith('/blog/') 
              ? "text-green-500 border-b-2 border-green-500 pb-1" 
              : "text-white hover:text-green-500 transition"}
          >
            Блог
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
