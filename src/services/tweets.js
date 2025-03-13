import API from './api';

/**
 * Reusable function to handle API requests.
 * @param {string} endpoint - API endpoint.
 * @param {boolean} forceRefresh - Whether to force refresh data.
 * @returns {Promise<any>} - Response data or fallback value.
 */
const fetchData = async (endpoint, forceRefresh = false, fallback = null) => {
  try {
    const response = await API.get(endpoint, {
      params: { force_refresh: forceRefresh },
    });

    return response.data?.data ?? fallback;
  } catch (error) {
    handleApiError(error);
    return fallback;
  }
};

/**
 * Handles API request errors with structured logging.
 * @param {Object} error - Axios error object.
 */
const handleApiError = (error) => {
  if (error.code === 'ECONNABORTED') {
    console.error('[API Error] Request timeout: The server took too long to respond.');
  } else if (!error.response) {
    console.error('[API Error] Network issue: Please check your internet connection.');
  } else {
    console.error(
      `[API Error] ${error.response.status}: ${error.response.data?.message || 'Unknown server error.'}`
    );
  }
};

// Exported functions using the reusable fetchData
export const fetchTweets = async (forceRefresh = false) =>
  fetchData('/fetch_tweets', forceRefresh, []);
export const fetchSentiments = async (forceRefresh = false) =>
  fetchData('/sentimentos', forceRefresh, null);
export const fetchHourlyMetrics = async (forceRefresh = false) =>
  fetchData('/hourly_metrics', forceRefresh, null);
