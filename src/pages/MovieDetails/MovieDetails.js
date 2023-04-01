import { searchMovieInfo } from 'API';
import { BtnBack } from 'components/BtnBack/BtnBack';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    searchMovieInfo(movieId).then(movie => {
      setMovieInfo(movie);
    });
  }, [movieId]);

  const { overview, poster_path, title, genres, vote_average, original_title } =
    movieInfo;
  const genre = genres && genres.map(genr => genr.name).join(', ');

  return (
    <hero>
      <section className={css.container}>
        <BtnBack></BtnBack>
        <div className={css.card}>
          <div>
            {(
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              ></img>
            ) || <img src="https://via.placeholder.com/560x240" alt="" />}
          </div>

          <div className={css.description}>
            <h1>{original_title}</h1>
            <p>UserScore: {vote_average}</p>

            <h2>Overviews:</h2>
            <p>{overview}</p>

            <h2>Genres</h2>
            <p>{genre}</p>
          </div>
        </div>
      </section>
      <div className={css.additionInfo}>
        <span>Additional information</span>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/credits`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/review`}>Review</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </hero>
  );
};
