'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl text-gray-900">
                Next.js App
              </Link>
            </div>
            <nav className="ml-6 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 