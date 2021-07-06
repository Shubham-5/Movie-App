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

  useEffect(() => {}, []);

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchInput}&apikey=33136a8d`
    );
    const responseJson = await response.json();

    setMovies(responseJson.Search);

    setSearchInput("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getMovies();
  };

  const favHandler = (movie) => {
    const newFav = setFav([...fav, movie]);
    saveToLocalStorage(newFav);
  };
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };
  const removeFavouriteMovie = (movie) => {
    const newFav = fav.filter((favl) => favl.imdbID !== movie.imdbID);

    setFav(newFav);
    saveToLocalStorage(newFav);
  };

  return (
    <div className='container movie-app  '>
      <div className=' d-flex align-items-center Smt-4 mb-4'>
        <Heading heading='Movie' />
        <SearchForm
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          onSubmitHandler={onSubmitHandler}
        />
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
