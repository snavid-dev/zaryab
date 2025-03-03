import axios from 'axios';

// Cache settings
const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
const CACHE_PREFIX = 'apiCache_'; // Prefix for localStorage keys

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: 'https://zariab.cyborgtech.co/wp-json', // Your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to check cache before making an API call
axiosInstance.interceptors.request.use((config) => {
  try {
    if (typeof window !== 'undefined' && config.method === 'get') {
      // Ensure this runs only on the client side
      const cacheKey = `${CACHE_PREFIX}${config.url}`;
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(`${cacheKey}_time`);

      // If cache exists and is still valid, return cached data
      if (
        cachedData &&
        cachedTime &&
        Date.now() - cachedTime < CACHE_DURATION
      ) {
        console.log('Returning cached data:', config.url);
        return Promise.resolve({
          ...config,
          adapter: () =>
            Promise.resolve({
              data: JSON.parse(cachedData),
              status: 200,
              statusText: 'OK',
              headers: {},
              config,
            }),
        });
      }
    }
  } catch (err) {
    console.warn('Cache Read Error:', err.message);
  }

  return config; // Continue request if no valid cache found
});

// Response interceptor to store API responses in cache
axiosInstance.interceptors.response.use(
  (response) => {
    try {
      if (typeof window !== 'undefined' && config.method === 'get') {
        // Store response in localStorage only on the client
        const cacheKey = `${CACHE_PREFIX}${response.config.url}`;
        localStorage.setItem(cacheKey, JSON.stringify(response.data));
        localStorage.setItem(`${cacheKey}_time`, Date.now());
      }
    } catch (err) {
      console.warn('Cache Write Error:', err.message);
    }

    return response;
  },
  (error) => {
    let errorMessage = 'Unknown API error';

    if (error.response) {
      if (error.response.status === 400 || error.response.status === 409) {
        // Use the message from the response data if available
        errorMessage = error.response.data?.message || 'An error occurred';
      } else {
        errorMessage = error.response.data?.message || 'Server error';
      }
    } else if (error.request) {
      errorMessage = 'No response from server';
    } else {
      errorMessage = error.message;
    }

    // console.error('API Error:', errorMessage);
    return Promise.resolve({
      data: {},
      status: error.response ? error.response.status : 500, // Use the status from the error response
      statusText: errorMessage,
      headers: {},
      config: error.config,
    });
  }
);

export default axiosInstance;
