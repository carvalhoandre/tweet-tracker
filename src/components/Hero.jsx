import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi';

import { keyframesHeader } from '../styles/keyframes';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-black text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-45 left-1/4 top-1/4">
          <FaXTwitter className="w-48 h-48 text-white" />
        </div>
        <div className="absolute transform rotate-12 right-1/4 bottom-1/4">
          <FaXTwitter className="w-32 h-32 text-white" />
        </div>
      </div>

      <div className="container relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6 sm:mb-8">
              <span className="inline-block hover:animate-scale">Análise X</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl">
              Monitore e analise postagens sobre{' '}
              <span className="inline-block bg-orange-400 text-white px-2">Neymar</span>. Obtenha
              insights sobre o sentimento público e acompanhe métricas de engajamento com nossa
              poderosa ferramenta de coleta.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('posts')}
                className="z-20 group inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Ver Posts
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => scrollToSection('metrics')}
                className="z-20 inline-flex items-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Métricas
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

keyframesHeader();

export default Hero;
