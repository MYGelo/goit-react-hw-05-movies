import css from './Home.module.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendMovies } from 'API';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, []);

  return (
    <div className={css.container}>
      <MoviesGallery movies={movies}></MoviesGallery>
    </div>
  );
};
