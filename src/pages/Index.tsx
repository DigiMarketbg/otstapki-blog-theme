
import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/home/HeroSection';
import PostsSection from '@/components/home/PostsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <HeroSection />
      <PostsSection />
    </div>
  );
};

export default Index;
