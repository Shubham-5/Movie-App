import React from "react";

const SearchForm = ({ setSearchInput, searchInput }) => {
  return (
    <>
      <div className='col col-sm-4'>
        <input
<<<<<<< HEAD
          className='form-control'
          type='text'
          placeholder='Search a movie...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
=======
            className='form-control'
            type='text'
            placeholder='Search a movie..'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        
>>>>>>> 9e271e23c9d33ff976607037194996759485368b
      </div>
    </>
  );
};

export default SearchForm;
