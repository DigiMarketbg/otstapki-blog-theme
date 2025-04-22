import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWordPressSiteSettings } from '@/services/wordpressApi';
const SiteHeader = () => {
  const location = useLocation();
  const {
    data: siteSettings = {
      title: "Отстъпки БГ",
      logo: "/lovable-uploads/6cbb2d8a-6ad4-48cf-bdd4-443bd16a25c8.png"
    }
  } = useWordPressSiteSettings();
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-black py-4 border-b border-green-500/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-[8px]">
        <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={siteSettings.logo} alt={`${siteSettings.title} Лого`} className="h-13" />
        </Link>

        {/* Centered navigation menu for desktop */}
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          <Link to="/" className={isActive('/') ? "text-green-500 border-b-2 border-green-500 pb-1" : "text-white hover:text-green-500 transition"}>
            Начало
          </Link>
          <Link to="/blog" className={isActive('/blog') || location.pathname.startsWith('/blog/') ? "text-green-500 border-b-2 border-green-500 pb-1" : "text-white hover:text-green-500 transition"}>
            Блог
          </Link>
          {/* New external button */}
          <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition border border-green-500 rounded px-3 py-1.5 ml-4">
            Otstapki.bg
          </a>
        </nav>
      </div>
    </header>;
};
export default SiteHeader;