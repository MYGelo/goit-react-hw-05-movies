import { searchMovieFull } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movieInfo, setMovieInfo] = useState([]);
  console.log(movieInfo);

  useEffect(() => {
    searchMovieFull(movieId).then(movie => {
      setMovieInfo(movie);
    });
  }, [movieId]);

  const { overview, poster_path, release_date, title, genres, tagline } =
    movieInfo;
  const genre = genres && genres.map(genr => genr.name).join(', ');

  return (
    <container className={css.container}>
      <div>
        {(
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          ></img>
        ) || <img src="https://via.placeholder.com/560x240" alt="" />}
      </div>

      <div>
        <h2>Tagline</h2>
        <p>{tagline}</p>

        <h2>Overviews:</h2>
        <p>{overview}</p>

        <h2>Release date</h2>
        <p>{release_date}</p>

        <h2>Genres</h2>
        <p>{genre}</p>
      </div>
    </container>
  );
};
