'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['900'],   // Bold
  subsets: ['latin'],
});



export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { 
      name: 'Courses', 
      href: '/courses',
      submenu: [
        { name: 'All Courses', href: '/courses' },
        { name: 'Featured', href: '/courses/featured' },
        { name: 'Certifications', href: '/courses/certifications' },
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      submenu: [
        { name: 'Learning Materials', href: '/resources/materials' },
        { name: 'Training Calendar', href: '/resources/calendar' },
        { name: 'Career Development', href: '/resources/career' },
      ]
    },
    { name: 'Contact', href: '/contact', current: false },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
         <div className="">
  <Link href="/" className="flex items-center ">
  <h1 className={`text-2xl text-blue-600 ${poppins.className}`}>
    FitBookPro
  </h1>
</Link>

</div>


          <div className="hidden md:flex items-center space-x-1 font-sans font-medium">
  <Link href="/affiliate"  className="text-gray-800 font-medium font-sans hover:text-blue-600 px-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
    Be An Affiliate
  </Link>

  <Link href="/pricing" className=" text-gray-800 font-medium font-sans  hover:text-blue-600 px-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
    Pricing
  </Link>

  <Link href="/Login" className="  text-gray-800 px-4  hover:from-blue-700 hover:to-blue-800 transition-all duration-200   font-nomral">
    Login
  </Link>
</div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex justify-between items-center px-4 py-3 text-gray-700 font-medium cursor-pointer list-none hover:bg-gray-50 rounded-lg">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4 transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-1 ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col  border-t border-gray-200">
                <Link
                  href="/login"
                  className="block px-4 py-3 text-center text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-3 text-center text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}