import { searchMovies } from 'API';
import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
// import { SearchForm } from 'components/SearchForm/SearchForm';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querry = searchParams.get('querry') || '';

  useEffect(() => {
    searchMovies(querry)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, [querry]);

  let search = '';
  const handleChange = e => {
    search = e.target.value.toLowerCase();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      alert('enter movie name');
    }

    setSearchParams({ querry: search });
    e.target.reset();
  };

  return (
    <section className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        ></input>
        <button type="submit"> Search </button>
      </form>
      {/* <SearchForm onSubmit={handleSearchSubmit} /> */}
      <MoviesGallery movies={movies} />
    </section>
  );
};
