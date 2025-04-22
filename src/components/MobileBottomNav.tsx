
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Box } from "lucide-react";

const MobileBottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path || (path === "/blog" && location.pathname.startsWith("/blog"));

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-green-400/20 flex justify-around items-center py-2 md:hidden z-50">
      <Link
        to="/"
        className={`flex flex-col items-center text-xs ${
          isActive("/") ? "text-green-500" : "text-white"
        }`}
      >
        <Home size={24} />
        Начало
      </Link>
      <Link
        to="/blog"
        className={`flex flex-col items-center text-xs ${
          isActive("/blog") ? "text-green-500" : "text-white"
        }`}
      >
        <Book size={24} />
        Блог
      </Link>
      <a
        href="https://www.otstapki.bg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-xs text-white hover:text-green-500"
        aria-label="Отстъпки Бг"
      >
        <Box size={24} strokeWidth={1.8} className="mb-1 text-green-500" />
        {/* Tекст като надпис под иконата */}
        Отстъпки Бг
      </a>
    </nav>
  );
};

export default MobileBottomNav;
