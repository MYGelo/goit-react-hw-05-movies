import { NavLink } from 'react-router-dom';

export const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            {movie.title} {movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
