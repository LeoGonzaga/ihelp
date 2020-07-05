import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ihelp-back.herokuapp.com/',
});

export default api;
