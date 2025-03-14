import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <span>Feito com</span>
            <FaHeart className="text-orange-400" />
            <span>por André Leite Carvalho</span>
          </div>

          <a
            href="https://github.com/carvalhoandre/coletor-tweets"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span>Ver no GitHub</span>
          </a>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AC Collector. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
