import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { Credits } from './Credits/Credits';
import { Review } from './Review/Review';

// const Navigation = lazy(() => import('./Navigation/Navigation'));
// const Home = lazy(() => import('pages/Home/Home'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));
// const Credits = lazy(() => import('./Credits/Credits'));
// const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
