import { searchMovies } from 'API';
import { useEffect, useState } from 'react';
import css from './Movies.module.css';

import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputSearch, setInputSearch] = useState(
    JSON.parse(localStorage.getItem('inputSearch'))
  );

  useEffect(() => {
    searchMovies(inputSearch)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, [inputSearch]);

  useEffect(() => {
    localStorage.setItem('inputSearch', JSON.stringify(inputSearch));
  }, [inputSearch]);

  let search = '';

  const handleChange = e => {
    search = e.target.value.toLowerCase();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputSearch(search);
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
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
