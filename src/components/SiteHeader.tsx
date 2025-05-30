
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWordPressSiteSettings } from '@/services/wordpressApi';
import MobileBottomNav from './MobileBottomNav';

const SiteHeader = () => {
  const location = useLocation();
  const {
    data: siteSettings = {
      title: "Отстъпки Бг",
      logo: "/lovable-uploads/b3ffb991-c5ff-4f25-bcd9-5d112b396fba.png"
    }
  } = useWordPressSiteSettings();
  const isActive = (path: string) => location.pathname === path;

  return <>
      <header className="bg-black border-b border-green-400/20 py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 mb-4 md:mb-0 justify-center md:justify-start w-full md:w-auto"
          >
            <img 
              src={siteSettings.logo} 
              alt={`${siteSettings.title} Лого`} 
              className="h-20 w-auto max-w-[178px] md:max-w-[128px] object-contain" 
              style={{ filter: 'none' }}
            />
          </Link>

          {/* Centered navigation menu for desktop */}
          <nav className="hidden md:flex items-center gap-6 mx-auto">
            <Link to="/" className={isActive('/') ? "text-green-500 border-b-2 border-green-500 pb-1" : "text-white hover:text-green-500 transition"}>
              Начало
            </Link>
            <Link to="/blog" className={isActive('/blog') || location.pathname.startsWith('/blog/') ? "text-green-500 border-b-2 border-green-500 pb-1" : "text-white hover:text-green-500 transition"}>
              Блог
            </Link>
            {/* New external button with icon */}
            <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition border border-green-500 rounded px-3 py-1.5 ml-4 flex items-center gap-2" aria-label="Отстъпки Бг">
              <img
                src="/lovable-uploads/b3ffb991-c5ff-4f25-bcd9-5d112b396fba.png"
                alt="Отстъпки Бг"
                className="w-6 h-6 object-contain"
                style={{ filter: 'none' }}
              />
              <span className="hidden md:inline">Отстъпки Бг</span>
            </a>
          </nav>
        </div>
      </header>
      <MobileBottomNav />
    </>;
};

export default SiteHeader;
