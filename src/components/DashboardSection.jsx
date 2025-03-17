import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaChartLine, FaSmile } from 'react-icons/fa';
import { MdDataExploration } from 'react-icons/md';
import { GiHypersonicBolt } from 'react-icons/gi';

import { Loading, ChartDisplay, TabButton } from './index';

function DashboardSection({ metrics, loading, totalTweets }) {
  const [activeTab, setActiveTab] = useState('sentiment');

  if (loading) return <Loading title="Carregando métricas..." />;

  const data = metrics.map((metric) => ({
    hour: `${metric.hour}:00`,
    tweets: totalTweets || 0,
    likes: metric.likes_mean || 0,
    retweets: metric.retweets_mean || 0,
    replies: metric.replies_mean || 0,
    sentiment: metric.sentiment_mean || 0,
    hype_score: metric.hype_score || 0,
  }));

  const tabs = [
    { id: 'hype', label: 'Hype', icon: GiHypersonicBolt, title: 'Evolução do Hype' },
    {
      id: 'sentiment',
      label: 'Sentimento',
      icon: FaSmile,
      title: 'Sentimento Médio ao Longo do Tempo',
    },
    {
      id: 'engagement',
      label: 'Engajamento',
      icon: FaChartLine,
      title: 'Engajamento Médio por Hora',
    },
    {
      id: 'volume',
      label: 'Volume',
      icon: MdDataExploration,
      title: 'Volume de Tweets ao Longo das Horas',
    },
  ];

  return (
    <section
      id="sentiments"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-transparent to-gray-50"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4">
            Dashboards
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                icon={tab.icon}
                label={tab.label}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <ChartDisplay key={tab.id} type={tab.id} data={data} title={tab.title} />
              )
          )}
        </div>
      </div>
    </section>
  );
}

DashboardSection.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number,
      likes_mean: PropTypes.number,
      replies_mean: PropTypes.number,
      retweets_mean: PropTypes.number,
      sentiment: PropTypes.number,
      sentiment_mean: PropTypes.number,
      shares_mean: PropTypes.number,
      tweet_count: PropTypes.number,
    })
  ),
  loading: PropTypes.bool.isRequired,
  totalTweets: PropTypes.number,
};

export default DashboardSection;
