
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-green-950/20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Открий най-добрите </span>
          <span className="text-green-500">намаления</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Най-добрите отстъпки и промоции около теб – избери и спести!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
