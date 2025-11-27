'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['900'],
  subsets: ['latin'],
});

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentBgIndex, setCurrentBgIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  const heroTexts: string[] = [
    "Build Stunning eBooks With Ai",
    "Perfect for Coaches & Creators",
    "Export High Quality Designs",
    "Generate in Minutes, Not Hours"
  ];

  const backgroundColors: string[] = [
    '#112c79', // Deep Blue
    '#5f156e', // Purple
    '#2563EB', // Bright Blue
    '#1E40AF', // Royal Blue
  ];

  // Typing effect
  useEffect(() => {
    const type = () => {
      const fullText = heroTexts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        typeSpeed = 500;
      }

      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
      typingRef.current = setTimeout(type, typeSpeed);
    };

    typingRef.current = setTimeout(type, 100);
    
    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [currentText, currentTextIndex, isDeleting, heroTexts]);

  // Background color transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgroundColors.length);
        setIsTransitioning(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center mx-6 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning ? 'opacity-80' : 'opacity-100'
          }`}
          style={{
            backgroundColor: backgroundColors[currentBgIndex],
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${backgroundColors[currentBgIndex]} 0%, ${backgroundColors[(currentBgIndex + 1) % backgroundColors.length]} 50%, ${backgroundColors[currentBgIndex]} 100%)`,
            backgroundSize: '200% 200%',
          }}
        />

        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2%, transparent 2.5%), radial-gradient(circle at 75% 75%, white 2%, transparent 2.5%)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black min-h-[140px] flex items-center justify-center leading-tight ${poppins.className} text-white`}>
          <span className="inline-block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {currentText}
            <span className="ml-1 animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-xl md:text-lg lg:text-xl mb-8 mx-auto leading-relaxed text-white/90 font-medium">
          FitBookPro helps you generate beautiful, high quality eBooks in minutes - perfect for content creators, coaches, educators, and marketers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link 
            href="/courses" 
            className="group bg-[#4d30cf] hover:bg-[#4a36b5] rounded-xl flex items-center gap-3 px-8 py-4 text-white text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get Started 
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button 
            className="bg-white/95 hover:bg-white rounded-xl flex items-center gap-3 px-8 py-4 text-[#5c42d3] hover:text-[#4a36b5] text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/30 backdrop-blur-sm"
          >
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;