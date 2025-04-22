
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-green-950/20 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green orbs */}
        <div className="absolute w-32 h-32 rounded-full bg-green-500/10 top-10 left-[10%] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute w-48 h-48 rounded-full bg-green-500/5 bottom-10 right-[15%] animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
        <div className="absolute w-24 h-24 rounded-full bg-green-500/10 bottom-32 left-[20%] animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
        
        {/* Floating particles */}
        <div className="absolute w-2 h-2 rounded-full bg-green-400/40 top-[30%] left-[25%] animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute w-3 h-3 rounded-full bg-green-400/30 top-[20%] right-[35%] animate-[float_18s_ease-in-out_infinite_2s]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-green-400/40 bottom-[35%] right-[15%] animate-[float_20s_ease-in-out_infinite_1s]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-green-400/40 bottom-[25%] left-[40%] animate-[float_12s_ease-in-out_infinite_3s]"></div>
        
        {/* Light beams */}
        <div className="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-500/0 to-green-500/5 rotate-[30deg] top-[-100px] left-[20%] animate-[float-slow_30s_ease-in-out_infinite]"></div>
        <div className="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-500/0 to-green-500/5 rotate-[-30deg] top-[-200px] right-[30%] animate-[float-slow_25s_ease-in-out_infinite_5s]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <Sparkles className="h-12 w-12 text-green-500/70 mx-auto mb-4 animate-[pulse_3s_ease-in-out_infinite]" />
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
