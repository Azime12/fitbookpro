'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdvancedRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  // Advanced Particle System - Same as Login Page
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
        color: '#ffffff',
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      setIsLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions!");
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    router.push('/dashboard');
  };

  const handleGoogleSignUp = () => {
    // Google OAuth implementation
    console.log('Google sign up');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 animated-gradient opacity-90" />
      
      {/* Additional Gradient Orbs */}
      {/* <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" /> */}

      {/* Back to Home Link */}
      <Link 
        href="/"
        className="absolute top-8 right-8 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2 group border border-white/10"
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

      {/* Main Register Container - WHITE BACKGROUND */}
      <div className="w-full max-w-lg relative z-10">
        {/* White Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden border border-gray-200">
          {/* Subtle Background Pattern */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-100" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full translate-y-16 -translate-x-16" />
           */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14   bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
                  />
                </svg>
              </div>
              {/* <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Create Account
              </h1>
              <p className="text-gray-600 text-lg">
                Join us and get started today
              </p> */}
            </div>

            {/* Google Sign Up */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full bg-white text-gray-700 font-semibold py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 mb-8 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 group relative overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <svg 
                className="w-6 h-6" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              <span className="relative font-medium">Sign up with Google</span>
            </button>

            {/* Divider */}
            {/* <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm font-medium">or sign up with email</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div> */}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
           

              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    placeholder="Enter your email"
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-2xl px-3 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 pr-12 font-medium"
                    required
                  />
                  {/* <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isFocused.email ? 'scale-110 text-blue-500' : 'text-gray-400'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label htmlFor="password" className="text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Password
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                    placeholder="Create a password"
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-2xl px-5 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 pr-12 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isFocused.password ? 'text-blue-500' : 'text-gray-400'} hover:text-gray-600`}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-3">
                <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Confirm Password
                </label>
                <div className="relative group">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('confirmPassword')}
                    onBlur={() => handleBlur('confirmPassword')}
                    placeholder="Confirm your password"
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 pr-12 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isFocused.confirmPassword ? 'text-blue-500' : 'text-gray-400'} hover:text-gray-600`}
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              {/* <div className="flex items-start space-x-3">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-gray-600 text-sm">
                  I agree to the{' '}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600  hover:bg-blue-500 text-white font-bold py-4 px-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="relative">Creating Account...</span>
                  </>
                ) : (
                  <span className="relative">Create Account</span>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-200 hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        {/* <div className="text-center mt-8">
          <p className="text-white/80 text-xs flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Your data is securely encrypted with 256-bit SSL encryption
          </p>
        </div> */}
      </div>

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
      `}</style>
    </div>
  );
}