import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: 'https://zariab.cyborgtech.co/wp-json', // Backend base URL from environment variable
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// Optional: Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error); // Pass the error to be handled later
  }
);

export default axiosInstance;
