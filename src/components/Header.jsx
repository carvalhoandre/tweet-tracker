import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import Link from './Link';

import Logo from '../assets/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="AC Logo" />
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter">AC Collector</h1>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="home" title="Home" />
            <Link href="posts" title="Posts" />
            <Link href="sentiments" title="Sentimentos" />
            <Link href="metrics" title="Metricas" />
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isMenuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-4 space-y-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="home"
                title="Home"
                className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
              />
              <Link
                href="posts"
                title="Posts"
                className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
              />
              <Link
                href="sentiments"
                title="Sentimentos"
                className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
              />
              <Link
                href="metrics"
                title="Metricas"
                className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
