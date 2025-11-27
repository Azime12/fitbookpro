import Link from 'next/link';
import { Globe, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-zinc-900 to-gray-900 text-gray-300 py-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-green-400">FitBook Pro</h2>
          <p className="text-sm">
            Your AI-powered eBook generator. Create, customize, and publish with ease.
          </p>
          <div className="flex space-x-3 pt-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <Globe className="h-5 w-5" />
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-green-400 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-green-400 transition-colors duration-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-green-400 transition-colors duration-200">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition-colors duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/affiliate" className="hover:text-green-400 transition-colors duration-200">
                Be an Affiliate
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog" className="hover:text-green-400 transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-green-400 transition-colors duration-200">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/tutorials" className="hover:text-green-400 transition-colors duration-200">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/templates" className="hover:text-green-400 transition-colors duration-200">
                Templates
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Legal & Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms-of-service" className="hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-green-400 transition-colors duration-200">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </li>
          </ul>
          
          {/* Contact Info */}
          <div className="mt-6">
            <p className="text-sm">
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:support@fitbookpro.com" 
                className="hover:text-green-400 transition-colors duration-200"
              >
                support@fitbookpro.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-5 pt-2 text-center text-sm text-gray-500">
        <p>
          © 2025 FitBookPro. All rights reserved. 
          <span className="mx-2">•</span>
          Developed by{' '}
          <a 
            href="https://addiswebsite.com" 
            className="hover:text-green-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Addiswebsite.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;