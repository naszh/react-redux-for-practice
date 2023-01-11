import axios from 'axios';

export const kinopoiskApi = axios.create({
  baseURL: 'https://api.kinopoisk.dev',
});

export const token = 'MAS8BK0-MTK4DWS-K938XF3-H59D1F5';
