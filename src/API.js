import axios from 'axios';

const api = `https://api.themoviedb.org/3/`;
const key = `b4e7b15a3300b6cccec91fe70cf6dc81`;

export const fetchTrendMovies = async () => {
  const url = `${api}trending/all/day?api_key=${key}`;

  try {
    const response = await axios.get(url);

    const movies = response.data.results.map(result => {
      return {
        id: result.id,
        title: result.title,
        name: result.name,
      };
    });

    if (response.status === 200) {
      return movies;
    }
  } catch (error) {
    return Promise.reject(new Error('Sorry something go wrong ;('));
  }
};

export const searchMovies = async inputSearch => {
  const url = `${api}search/movie?api_key=${key}&language=en-US&query=${inputSearch}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);

    const movies = response.data.results.map(result => {
      return {
        id: result.id,
        title: result.title,
        // name: result.name,
      };
    });

    if (response.status === 200) {
      return movies;
    }
  } catch (error) {
    return Promise.reject(new Error('Sorry something go wrong ;('));
  }
};
