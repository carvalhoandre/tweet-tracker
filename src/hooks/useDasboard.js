import { useState } from 'react';

import { FaChartLine, FaSmile } from 'react-icons/fa';
import { MdDataExploration } from 'react-icons/md';
import { GiHypersonicBolt } from 'react-icons/gi';

const useDasboard = (metrics, totalTweets) => {
  const [activeTab, setActiveTab] = useState('sentiment');

  // Transform metrics data for charts
  const data = metrics.reduce((acc, metric) => {
    const hour = `${metric.hour}:00`;

    // Create an object for the current hour if it doesn't exist
    if (!acc[hour]) {
      acc[hour] = {
        hour,
        tweets: totalTweets || 0,
        likes: metric.likes_mean || 0,
        retweets: metric.retweets_mean || 0,
        replies: metric.replies_mean || 0,
        sentiment: metric.sentiment_mean || 0,
        hype_score: metric.hype_score || 0,
        count: 1, // Track how many entries we've seen for this hour
      };
    } else {
      // Update existing hour data with additional metrics
      acc[hour].likes += metric.likes_mean || 0;
      acc[hour].retweets += metric.retweets_mean || 0;
      acc[hour].replies += metric.replies_mean || 0;
      acc[hour].sentiment += metric.sentiment_mean || 0;
      acc[hour].hype_score += metric.hype_score || 0;
      acc[hour].count += 1;
    }

    return acc;
  }, {});

  // Convert to array and calculate averages if needed
  const chartData = Object.values(data)
    .map((hourData) => {
      const { count, ...dataPoint } = hourData;

      // If we have multiple entries for an hour, calculate averages
      if (count > 1) {
        return {
          ...dataPoint,
          likes: dataPoint.likes / count,
          retweets: dataPoint.retweets / count,
          replies: dataPoint.replies / count,
          sentiment: dataPoint.sentiment / count,
          hype_score: dataPoint.hype_score / count,
        };
      }

      return dataPoint;
    })
    .sort((a, b) => {
      const hourA = parseInt(a.hour.split(':')[0], 10);
      const hourB = parseInt(b.hour.split(':')[0], 10);
      return hourA - hourB;
    });

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

  return {
    activeTab,
    chartData,
    tabs,
    setActiveTab,
  };
};

export default useDasboard;
