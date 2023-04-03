import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';

// import { Navigation } from './Navigation/Navigation';
// import { Home } from 'pages/Home/Home';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Movies } from 'pages/Movies/Movies';
// import { NotFound } from 'pages/NotFound/NotFound';
// import { Credits } from './Credits/Credits';
// import { Review } from './Review/Review';

const Navigation = lazy(() =>
  import('./Navigation/Navigation').then(module => ({
    ...module,
    default: module.Navigation,
  }))
);
const Home = lazy(() =>
  import('pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Movies = lazy(() =>
  import('pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const Credits = lazy(() =>
  import('./Credits/Credits').then(module => ({
    ...module,
    default: module.Credits,
  }))
);
const Review = lazy(() =>
  import('./Review/Review').then(module => ({
    ...module,
    default: module.Review,
  }))
);
const NotFound = lazy(() =>
  import('pages/NotFound/NotFound').then(module => ({
    ...module,
    default: module.NotFound,
  }))
);
export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
