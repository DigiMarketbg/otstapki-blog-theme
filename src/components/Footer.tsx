
import React from 'react';
import { Link } from 'react-router-dom';
import { useWordPressSiteSettings } from '@/services/api/hooks';

const Footer = () => {
  const { data: siteSettings } = useWordPressSiteSettings();
  const currentYear = new Date().getFullYear();
  const siteTitle = siteSettings?.title || "otstapki.bg";

  return (
    <footer className="bg-black/95 border-t border-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-400 text-sm select-none animate-[flutter_3s_ease-in-out_infinite]">
        <p>
          &copy; {currentYear} {siteTitle}. Всички права запазени.{" "}
          Изработено от{" "}
          <Link 
            to="https://webuslugi.bg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-400 underline hover:text-green-600"
          >
            webuslugi.bg
          </Link>
        </p>
      </div>
      {/* flutter keyframes animation style */}
      <style>
        {`
          @keyframes flutter {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(-2deg); }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

