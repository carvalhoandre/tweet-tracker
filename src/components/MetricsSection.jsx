import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

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

  return (
    <section id="metrics" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black tracking-tighter mb-12">Métricas por Hora</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-black text-white rounded-2xl p-8 card-hover">
            <h3 className="text-xl font-bold mb-4">Total de Posts</h3>
            <p className="text-5xl font-black text-orange-400">{totalTweets}</p>
          </div>
          <div className="bg-black text-white rounded-2xl p-8 card-hover">
            <h3 className="text-xl font-bold mb-4">Hora Pico</h3>
            <p className="text-5xl font-black text-orange-400">{peakHourData.hour || 'N/A'}h</p>
          </div>
          <div className="bg-black text-white rounded-2xl p-8 card-hover">
            <h3 className="text-xl font-bold mb-4">Sentimento Médio</h3>
            <p className="text-5xl font-black text-orange-400">
              {avgSentiment ? avgSentiment.toFixed(2) : 'N/A'}
            </p>
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
