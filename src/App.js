import { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import SearchForm from "./components/SearchForm";
import Heading from "./components/Heading";
import AddFavComponent from "./components/AddFavComponent";
import RemoveFavourites from "./components/RemoveFavourites";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [fav, setFav] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getMovies(searchInput);
  }, [searchInput]);

  // useEffect(() => {
  //   const movieFavSaved = JSON.parse(
  //     localStorage.getItem("react-movie-app-favourites")
  //   );
  //   setFav(movieFavSaved);
  // }, []);

  const getMovies = async (searchInput) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchInput}&apikey=33136a8d`
    );
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const favHandler = (movie) => {
    const newFav = [...fav, movie];
    setFav(newFav);
    // saveToLocalStorage(newFav);
  };
  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  // };
  const removeFavouriteMovie = (movie) => {
    const newFav = fav.filter((favl) => favl.imdbID !== movie.imdbID);

    setFav(newFav);
    // saveToLocalStorage(newFav);
  };

  return (
    <div className='container movie-app  '>
      <div className=' d-flex align-items-center Smt-4 mb-4'>
        <Heading heading='Movie' />

        <SearchForm setSearchInput={setSearchInput} searchInput={searchInput} />
      </div>
      <div className='row '>
        <MoviesList
          favouriteAdder={AddFavComponent}
          favHandler={favHandler}
          movies={movies}
        />
      </div>
      <div className='row'>
        <Heading heading='Favourites' />
      </div>
      <div className='row '>
        <MoviesList
          favouriteAdder={RemoveFavourites}
          favHandler={removeFavouriteMovie}
          movies={fav}
        />
      </div>
    </div>
  );
}

export default App;
