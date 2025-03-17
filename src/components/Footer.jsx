import React from 'react';
import { FaGithub, FaHeart, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

import { Link, SocialLink } from './index';
import Logo from '../assets/logo.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  const classLink = 'block text-gray-400';

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img src={Logo} alt="AC Logo" />
              <h3 className="text-xl font-bold">AC Tweet Tracker</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Monitore e analise postagens do X (Twitter) com nossa ferramenta de coleta.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <nav className="space-y-2">
              <Link href="home" title="Home" className={classLink} />
              <Link href="posts" title="Posts" className={classLink} />
              <Link href="sentiments" title="Sentimentos" className={classLink} />
              <Link href="metrics" title="Metricas" className={classLink} />
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>

            <div className="flex items-center justify-center md:justify-end space-x-4">
              <SocialLink link="https://github.com/carvalhoandre/coletor-tweets" name="GitHub">
                <FaGithub className="text-2xl" />
              </SocialLink>
              <SocialLink link="https://x.com/andrecdev" name="X">
                <FaXTwitter className="text-2xl" />
              </SocialLink>
              <SocialLink link="https://www.linkedin.com/in/carvalhoandree" name="LinkedIn">
                <FaLinkedin className="text-2xl" />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <span>Feito com</span>
              <FaHeart className="text-orange-400 animate-pulse" />
              <span>por André Leite Carvalho</span>
            </div>

            <p className="text-sm text-gray-400">
              © {currentYear} AC Tweet Tracker. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
