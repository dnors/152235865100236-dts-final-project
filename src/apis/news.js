import axios from 'axios';

// const API_KEY = process.env.REACT_APP_TMDB_KEY;
const API_KEY = '7833e8ed262248e88406cba638d9a08d';
const baseUrl = 'https://newsapi.org/v2/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default news;