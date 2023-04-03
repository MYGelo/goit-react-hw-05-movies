import { searchMovieInfo } from 'API';
import { BtnBack } from 'components/BtnBack/BtnBack';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  // console.log(`MD`, backLinkHref);

  useEffect(() => {
    searchMovieInfo(movieId).then(movie => {
      setMovieInfo(movie);
    });
  }, [movieId]);

  const { overview, poster_path, title, genres, vote_average, original_title } =
    movieInfo;
  const genre = genres && genres.map(genr => genr.name).join(', ');

  return (
    <section>
      <div className={css.container}>
        <BtnBack location={backLinkHref}></BtnBack>
        <div className={css.card}>
          <div>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            ></img>
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
      </div>
      <div className={css.additionInfo}>
        <span>Additional information</span>
        <ul>
          <li>
            <NavLink
              to={`/movies/${movieId}/credits`}
              state={{ from: backLinkHref }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/review`}
              state={{ from: backLinkHref }}
            >
              Review
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
