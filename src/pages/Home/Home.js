import css from './Home.module.css';

import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendMovies } from 'API';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, []);

  return (
    <section className={css.container}>
      <h1>Trending to day</h1>
      <MoviesGallery movies={movies}></MoviesGallery>
    </section>
  );
}
