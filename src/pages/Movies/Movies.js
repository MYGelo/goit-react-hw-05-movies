import { searchMovies } from 'API';
import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const querry = searchParams.get('querry') || '';

  useEffect(() => {
    searchMovies(querry)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, [querry]);

  return (
    <section className={css.container}>
      <SearchForm />
      <MoviesGallery movies={movies} />
    </section>
  );
};
