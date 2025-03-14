import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function SentimentSection({ sentiments, loading }) {
  if (loading) return <Loading title="Carregando análise de sentimento" />;

  const sentimentCategories =
    sentiments?.reduce((acc, tweet) => {
      let category;
      if (tweet.sentiment > 0) category = 'Positivo';
      else if (tweet.sentiment < 0) category = 'Negativo';
      else category = 'Neutro';

      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {}) || {};

  return (
    <section id="sentiments" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black tracking-tighter mb-12">Análise de Sentimentos</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(sentimentCategories).map(([sentiment, count]) => (
            <div key={sentiment} className="bg-white text-black rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4 capitalize">{sentiment}</h3>
              <p className="text-5xl font-black text-orange-400">{count}</p>
            </div>
          ))}
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
  loading: PropTypes.bool.isRequired,
};

export default SentimentSection;
