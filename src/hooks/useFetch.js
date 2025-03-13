import React from 'react';
import { fetchHourlyMetrics, fetchSentiments, fetchTweets } from '../services/tweets';

const useFetch = () => {
  const [tweets, setTweets] = React.useState([]);
  const [sentiments, setSentiments] = React.useState(null);
  const [metrics, setMetrics] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async (forceRefresh = false) => {
    if (error) setError(false);

    try {
      setLoading(true);

      const tweetsData = await fetchTweets(forceRefresh);
      const sentimentsData = await fetchSentiments(forceRefresh);
      const metricsData = await fetchHourlyMetrics(forceRefresh);

      setTweets(tweetsData);
      setSentiments(sentimentsData);
      setMetrics(metricsData);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  });
  return {
    tweets,
    sentiments,
    metrics,
    error,
    loading,
    fetchData,
  };
};

export { useFetch };
