import React from "react";

const SearchForm = ({ setSearchInput, searchInput }) => {
  return (
    <>
      <div className='col col-sm-4'>
        <input
          className='form-control'
          type='text'
          placeholder='Search a movie...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchForm;
