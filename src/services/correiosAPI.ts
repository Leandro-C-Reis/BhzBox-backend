import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?'
})

export default api;