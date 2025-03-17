import React from 'react';
import PropTypes from 'prop-types';
import { FaChartLine, FaClock, FaSmile } from 'react-icons/fa';
import Loading from './Loading';
import MetricCard from './MetricCard';

function MetricsSection({ metrics, loading }) {
  if (loading) return <Loading title="Carregando métricas" />;

  const totalTweets = metrics?.reduce((sum, hour) => sum + (hour.tweet_count || 0), 0) || 0;

  const peakHourData =
    metrics?.reduce(
      (max, hour) => ((hour.tweet_count || 0) > (max.tweet_count || 0) ? hour : max),
      { tweet_count: 0 }
    ) || {};

  const avgSentiment =
    metrics?.reduce((sum, hour) => sum + (hour.sentiment || 0), 0) / (metrics?.length || 1);

  const avgLikes =
    metrics?.reduce((sum, hour) => sum + (hour.likes_mean || 0), 0) / (metrics?.length || 1);
  const avgRetweets =
    metrics?.reduce((sum, hour) => sum + (hour.retweets_mean || 0), 0) / (metrics?.length || 1);

  return (
    <section
      id="metrics"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent to-gray-50"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4">
            Métricas por Hora
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Acompanhe as principais métricas e insights sobre as postagens coletadas
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <MetricCard
            title="Total de Posts"
            value={totalTweets.toLocaleString()}
            icon={FaChartLine}
            subtitle="Posts coletados nas últimas 24h"
          />

          <MetricCard
            title="Hora Pico"
            value={`${peakHourData.hour || 'N/A'}h`}
            icon={FaClock}
            subtitle={`${peakHourData.tweet_count || 0} posts nesta hora`}
          />

          <MetricCard
            title="Sentimento Médio"
            value={avgSentiment ? avgSentiment.toFixed(2) : 'N/A'}
            icon={FaSmile}
            subtitle={`Média de ${avgLikes?.toFixed(1) || 0} likes por post`}
          />
        </div>

        {/* Additional Engagement Stats */}
        <div className="mt-8 sm:mt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Média de Likes', value: avgLikes?.toFixed(1) || '0' },
              { label: 'Média de Retweets', value: avgRetweets?.toFixed(1) || '0' },
              { label: 'Posts por Hora', value: (totalTweets / (metrics?.length || 1)).toFixed(1) },
              { label: 'Horas Analisadas', value: metrics?.length || '0' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

MetricsSection.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number,
      tweet_count: PropTypes.number,
      sentiment: PropTypes.number,
      likes_mean: PropTypes.number,
      replies_mean: PropTypes.number,
      retweets_mean: PropTypes.number,
      shares_mean: PropTypes.number,
      sentiment_mean: PropTypes.number,
    })
  ),
  loading: PropTypes.bool.isRequired,
};

export default MetricsSection;
