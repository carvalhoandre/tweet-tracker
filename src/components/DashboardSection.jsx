import React from 'react';
import PropTypes from 'prop-types';

import useDasboard from '../hooks/useDasboard';

import { Loading, ChartDisplay, TabButton } from './index';

function DashboardSection({ metrics, loading, totalTweets }) {
  const { activeTab, chartData, tabs, setActiveTab } = useDasboard(metrics, totalTweets);

  if (loading) return <Loading title="Carregando Dashboards..." />;

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
                <ChartDisplay key={tab.id} type={tab.id} data={chartData} title={tab.title} />
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
