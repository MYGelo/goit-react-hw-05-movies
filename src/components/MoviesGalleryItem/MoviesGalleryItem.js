export const MoviesGalleryItem = ({ movie }) => {
  const onClick = () => {
    console.log(movie.id);
  };
  return (
    <li onClick={onClick} id={movie.id}>
      <p>
        {movie.title} {movie.name}
      </p>
    </li>
  );
};
