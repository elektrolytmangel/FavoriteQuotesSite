import axios from 'axios';

// https://quotesservice.whitebay-9c60bf5f.westeurope.azurecontainerapps.io/swagger/index.html
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API || 'http://localhost:8080',
  headers: {
    'x-functions-clientid': 'app',
    'x-functions-key': process.env.REACT_APP_BACKEND_API_KEY || '',
  }
});