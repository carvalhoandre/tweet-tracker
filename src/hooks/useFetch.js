import React from 'react';
import { fetchHourlyMetrics } from '../services/tweets';

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

      const metricsData = await fetchHourlyMetrics(forceRefresh);

      setTweets(metricsData.tweets);
      setSentiments(metricsData.feelings);
      setMetrics(metricsData.metrics);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

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
