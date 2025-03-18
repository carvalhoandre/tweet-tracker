import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa6';

function Loading({ title = 'Carregando' }) {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <FaSpinner className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 animate-spin" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter">
                {title}
                <span className="animate-pulse">...</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Aguarde enquanto processamos os dados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
};

export default Loading;
