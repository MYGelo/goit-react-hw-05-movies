import {
  Link,
  // , Outlet
} from 'react-router-dom';

export const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title} {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
