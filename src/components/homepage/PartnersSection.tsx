'use client';

import { useRef } from 'react';

const PartnersSection = () => {
  const marqueeRef = useRef(null);

  const partners = [
    {
      name: "Toyvista",
      url: "https://toyvista.com",
      logo: "https://toyvista.com/images/logo.webp",
      alt: "Toyvista.com Logo"
    },
    {
      name: "Welnessworld",
      url: "https://welnessworld.com",
      logo: "https://welnessworld.com/images/logo.png",
      alt: "Welnessworld.com Logo"
    },
    {
      name: "Ishoez",
      url: "https://ishoez.com",
      logo: "https://ishoez.com/images/ishoez_logo.png",
      alt: "Ishoez.com logo"
    },
    {
      name: "Dgpick",
      url: "https://dgpick.com",
      logo: "https://dgpick.com/images/dgpick-logo.png",
      alt: "Dgpick.com Logo"
    },
    {
      name: "Electronixa",
      url: "https://electronixa.com",
      logo: "https://electronixa.com/images/electronixa-logo.png",
      alt: "Electronixa.com logo"
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Partners</h2>
      
      <div className="relative overflow-hidden">
        <div 
          ref={marqueeRef}
          className="flex animate-marquee whitespace-nowrap"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="inline-flex mx-8"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-20 min-w-[120px] object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;