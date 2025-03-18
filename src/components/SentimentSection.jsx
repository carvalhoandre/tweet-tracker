import React from 'react';
import PropTypes from 'prop-types';

import useSentimentConfig from '../hooks/useSocialLinks';

import SentimentCard from './SentimentCard';
import getSentimentCategories from '../utils/arrays';

function SentimentSection({ sentiments }) {
  const { SENTIMENT_CONFIG } = useSentimentConfig();

  const sentimentCategories = getSentimentCategories(sentiments);

  const totalSentiments = Object.values(sentimentCategories).reduce((a, b) => a + b, 0);

  return (
    <section
      id="sentiments"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4">
            Análise de Sentimentos
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Distribuição dos sentimentos detectados nas postagens analisadas
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {Object.entries(SENTIMENT_CONFIG).map(([type]) => (
            <SentimentCard
              key={type}
              type={type}
              count={sentimentCategories[type] || 0}
              total={totalSentiments}
            />
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-400">
            Total de {totalSentiments} posts analisados
          </p>
        </div>
      </div>
    </section>
  );
}

SentimentSection.propTypes = {
  sentiments: PropTypes.arrayOf(
    PropTypes.shape({
      sentiment: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default SentimentSection;
