import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.galaxpay.com.br/webservice', 
})

export default api;