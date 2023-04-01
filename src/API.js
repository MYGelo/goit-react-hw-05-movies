import axios from 'axios';

const api = `https://api.themoviedb.org/3/`;
const key = `b4e7b15a3300b6cccec91fe70cf6dc81`;
// const language = ``;

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

export const searchMovieInfo = async inputId => {
  const url = `${api}movie/${inputId}?api_key=${key}&language=en-US`;

  try {
    const response = await axios.get(url);

    const movie = response.data;

    if (response.status === 200) {
      return movie;
    }
  } catch (error) {
    return Promise.reject(new Error('Sorry something go wrong '));
  }
};

export const searchCredits = async movieId => {
  const url = `${api}movie/${movieId}/credits?api_key=${key}&language=en-US`;
  try {
    const response = await axios.get(url);

    const cast = response.data.cast.map(actor => {
      return {
        id: actor.id,
        name: actor.name,
        img: actor.profile_path,
        character: actor.character,
      };
    });
    if (response.status === 200) {
      return cast;
    }
  } catch (error) {
    return Promise.reject(new Error('Sorry something go wrong '));
  }
};
