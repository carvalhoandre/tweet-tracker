import React from 'react';
import PropTypes from 'prop-types';

import useSentimentConfig from '../hooks/useSocialLinks';

function SentimentCard({ type, count, total }) {
  const { SENTIMENT_CONFIG } = useSentimentConfig();

  const config = SENTIMENT_CONFIG[type];
  const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white text-black rounded-2xl p-6 sm:p-8 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 capitalize">{type}</h3>
          <p className="text-sm text-gray-600">{config.description}</p>
        </div>
        <config.icon className={`text-3xl sm:text-4xl ${config.textColor}`} />
      </div>

      <div className="mt-6">
        <div className="flex items-end justify-between mb-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black">{count}</span>
          <span className={`text-2xl font-bold ${config.textColor}`}>{percentage}%</span>
        </div>

        <div className="relative h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full ${config.color} transition-all duration-1000`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

SentimentCard.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default SentimentCard;
