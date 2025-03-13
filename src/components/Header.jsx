import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import Link from './Link';

function Header() {
  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaXTwitter className="text-2xl" />
            <h1 className="text-2xl font-black tracking-tighter">Collector</h1>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="home" title="Home" />
            <Link href="posts" title="Posts" />
            <Link href="sentiments" title="Sentimentos" />
            <Link href="metrics" title="Metricas" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
