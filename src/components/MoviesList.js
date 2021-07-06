import React from "react";

const MoviesList = ({ movies, favouriteAdder, favHandler }) => {
  const AddFavComponent = favouriteAdder;
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='image-container  d-flex justify-content-start m-3  '>
          <img src={movie.Poster} alt={movie.Title} />
          <div
            onClick={() => favHandler(movie)}
            className='overlay d-flex p-4 align-items-center justify-content-center'>
            <AddFavComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
