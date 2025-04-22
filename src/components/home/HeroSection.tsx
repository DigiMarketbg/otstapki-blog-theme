import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sparkles, BadgePercent, Percent, BadgeDollarSign } from "lucide-react";
const HeroSection = () => {
  return <section className="py-24 bg-gradient-to-b from-black to-green-950/10 relative overflow-hidden bg-neutral-950">
      {/* Dark overlay behind floating elements for better contrast */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green orbs with icons, using lighter, pastel greens and more transparency */}
        <div className="absolute w-32 h-32 rounded-full bg-green-100/10 top-10 left-[10%] animate-[pulse_6s_ease-in-out_infinite] flex items-center justify-center">
          <BadgePercent className="h-12 w-12 text-green-300/30" />
        </div>
        <div className="absolute w-48 h-48 rounded-full bg-green-100/5 bottom-10 right-[15%] animate-[pulse_8s_ease-in-out_infinite_1s] flex items-center justify-center">
          <BadgeDollarSign className="h-16 w-16 text-green-300/20" />
        </div>
        <div className="absolute w-24 h-24 rounded-full bg-green-100/10 bottom-32 left-[20%] animate-[pulse_7s_ease-in-out_infinite_0.5s] flex items-center justify-center">
          <Percent className="h-8 w-8 text-green-300/30" />
        </div>
        
        {/* Floating discount text elements - lighter colors with more transparency */}
        <div className="absolute top-[35%] left-[15%] animate-[float_20s_ease-in-out_infinite_2s]">
          <div className="text-green-300/10 text-2xl font-bold rotate-[-15deg]">-30%</div>
        </div>
        <div className="absolute top-[20%] right-[20%] animate-[float_25s_ease-in-out_infinite]">
          <div className="text-green-300/8 text-3xl font-bold rotate-[10deg]">-50%</div>
        </div>
        <div className="absolute bottom-[30%] right-[30%] animate-[float_18s_ease-in-out_infinite_3s]">
          <div className="text-green-300/10 text-2xl font-bold rotate-[5deg]">-20%</div>
        </div>
        
        {/* Website name floating in Latin letters, lighter and more transparent */}
        <div className="absolute bottom-[25%] left-[10%] animate-[float_22s_ease-in-out_infinite_1s]">
          <div className="text-green-300/15 text-4xl font-bold">otstapki.bg</div>
        </div>
        
        {/* Floating particles - lighter green and less intense */}
        <div className="absolute w-2 h-2 rounded-full bg-green-300/15 top-[30%] left-[25%] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute w-3 h-3 rounded-full bg-green-300/10 top-[20%] right-[35%] animate-[float_18s_ease-in-out_infinite_2s]" />
        <div className="absolute w-2 h-2 rounded-full bg-green-300/15 bottom-[35%] right-[15%] animate-[float_20s_ease-in-out_infinite_1s]" />
        <div className="absolute w-2 h-2 rounded-full bg-green-300/15 bottom-[25%] left-[40%] animate-[float_12s_ease-in-out_infinite_3s]" />
        
        {/* Light beams - lighter opacity */}
        <div className="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/8 rotate-[30deg] top-[-100px] left-[20%] animate-[float-slow_30s_ease-in-out_infinite]" />
        <div className="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/8 rotate-[-30deg] top-[-200px] right-[30%] animate-[float-slow_25s_ease-in-out_infinite_5s]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <Sparkles className="h-12 w-12 text-green-400/70 mx-auto mb-4 animate-[pulse_4s_ease-in-out_infinite]" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Открий най-добрите </span>
          <span className="text-green-400">намаления</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-green-600">
          Най-добрите отстъпки и промоции около теб – избери и спести!
        </p>
      </div>
    </section>;
};
export default HeroSection;