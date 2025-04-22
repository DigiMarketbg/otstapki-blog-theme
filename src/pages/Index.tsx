
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/home/HeroSection';
import PostsSection from '@/components/home/PostsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white pb-[56px] md:pb-0">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <PostsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
