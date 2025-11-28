'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AffiliatePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const benefits = [
    {
      icon: '💰',
      title: 'High Commissions',
      description: 'Earn up to 30% commission on every sale you refer'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your performance with detailed analytics and reports'
    },
    {
      icon: '🚀',
      title: 'Quick Payouts',
      description: 'Get paid reliably every month with multiple payout options'
    },
    {
      icon: '🛠️',
      title: 'Marketing Resources',
      description: 'Access banners, links, and content to help you promote'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your free affiliate account in under 2 minutes'
    },
    {
      number: '02',
      title: 'Promote',
      description: 'Use your unique referral links and marketing materials'
    },
    {
      number: '03',
      title: 'Earn',
      description: 'Get commissions for every successful referral'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Back Home Link */}
      <Link 
        href="/"
        className="fixed top-6 right-6 bg-white/20 text-indigo-100 px-6 py-3 rounded-full font-semibold text-sm backdrop-blur-sm border border-white/10 hover:bg-white/30 hover:text-white transition-all duration-300 z-50 flex items-center gap-2 group"
      >
        <svg 
          className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-16 fade-in">
            {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Join 10,000+ Successful Affiliates</span>
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Become an{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                 Affiliate

              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
             Partner with us and start earning money by promoting our products. It’s simple, free, and rewarding.
.
            </p>
          </div>
 <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
Why Join Us?            </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:-translate-y-2">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-indigo-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-white/10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-indigo-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center fade-in">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
                Join thousands of successful affiliates already earning with our program. 
                Sign up today and get access to all our marketing resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/affiliate-signup"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Earning Today
                </Link>
                
                <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <p className="text-indigo-300 mt-6 text-sm">
                No fees • Instant approval • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient {
          background: linear-gradient(270deg, #0f172a, #1e3a8a, #2563eb, #7c3aed, #0f172a);
          background-size: 1000% 1000%;
          animation: gradientShift 15s ease infinite;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out both;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @media (max-width: 768px) {
          .fade-in {
            animation: fadeIn 0.6s ease-out both;
          }
        }
      `}</style>
    </div>
  );
}