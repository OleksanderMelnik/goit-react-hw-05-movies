import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2e1e1d7377ff577a1effb61af070f65d';

export const getTrendingHome = async () => {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  
    return data.results;
  };

export const getSearchMovies = async query => {
const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
);

return data.results;
};