import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';

export const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesGalleryItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};
