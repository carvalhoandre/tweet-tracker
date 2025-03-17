import React from 'react';
import PropTypes from 'prop-types';

function MetricCard({ title, value, icon: Icon, subtitle }) {
  return (
    <div className="bg-black text-white rounded-2xl p-6 sm:p-8 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-800 hover:border-orange-400 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <Icon className="text-orange-400 text-2xl sm:text-3xl" />
      </div>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-400 mb-2">{value}</p>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
  );
}

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  subtitle: PropTypes.string,
};

export default MetricCard;
