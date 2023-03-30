import { searchMovies } from 'API';
import { useEffect, useState } from 'react';
import css from './Movies.module.css';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    searchMovies(inputSearch)
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, [inputSearch]);

  let search = '';

  const handleChange = e => {
    search = e.target.value.toLowerCase();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputSearch(search);
    console.log(inputSearch);
    e.target.reset();
  };

  return (
    <div className={css.container}>
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
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
