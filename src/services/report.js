import API from './api';

/**
 * Reusable function to handle API requests.
 * @param {string} endpoint - API endpoint.
 * @param {boolean} forceRefresh - Whether to force refresh data.
 * @returns {Promise<any>} - Response data or fallback value.
 */
export const fetchReport = async () => {
  try {
    const response = await API.post('/report', {
      query: "Adidas",
    });
    return response.data?.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
};
