import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-black text-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-black tracking-tighter mb-8">Análise X</h1>
          <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
            Monitore e analise postagens sobre Neymar. Obtenha insights sobre o sentimento público e
            acompanhe métricas de engajamento com nossa poderosa ferramenta de coleta.
          </p>
          <a
            href="#posts"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-400 hover:text-white transition-all duration-300"
          >
            Ver Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
