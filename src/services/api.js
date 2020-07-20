import axios from 'axios';

const api = axios.create({
  baseURL: 'https://users-challenge-api.herokuapp.com',
});

export default api;
