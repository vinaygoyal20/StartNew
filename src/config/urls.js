export const API_BASE_URL = 'http://shibe.online/api';

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const HOME_DATA_API = getApiUrl(
  '/shibes?urls=true&httpsUrls=true',
);
