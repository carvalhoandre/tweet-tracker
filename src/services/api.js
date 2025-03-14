import axios from 'axios';

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_ENVIROMENT === 'dev'
      ? import.meta.env.VITE_API_URL_LOCAL
      : import.meta.env.VITE_API_URL_PROD,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
  withCredentials: true,
});

const parseRequest = (config) => {
  return config;
};

const transformResponse = (response) => {
  const { ...data } = response.data;

  return {
    success: true,
    message: data.message || 'Operação realizada com sucesso',
    data: data.data || null,
    code: data.code || 200,
    firstValidation: data.validations?.[0] || data.validation?.[0] || null,
  };
};

const parseResponse = (response) => {
  response.data = transformResponse(response);
  return response;
};

const parseResponseError = (error) => {
  const response = error.response || {};

  const data = response.data || {};
  const defaultErrorMessage = 'Erro ao realizar a ação';

  const errorResponse = {
    status: response.status || 500,
    statusText: response.statusText || 'Internal Server Error',
    headers: response.headers || {},
    config: response.config || {},
    request: response.request,
    data: {
      success: false,
      isCanceled: axios.isCancel(error),
      message: data.message || defaultErrorMessage,
      data: data.data || null,
      code: data.code || null,
      firstValidation: data.validations?.[0] || data.validation?.[0] || null,
    },
  };

  return Promise.resolve(errorResponse);
};

API.interceptors.request.use(parseRequest);
API.interceptors.response.use(parseResponse, parseResponseError);

export default API;
