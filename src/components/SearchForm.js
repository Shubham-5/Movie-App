import React from "react";

const SearchForm = ({ setSearchInput, searchInput, onSubmitHandler }) => {
  return (
    <>
      <div className='col col-sm-4'>
        <form onSubmit={onSubmitHandler}>
          <input
            className='form-control'
            type='text'
            placeholder='Search ..'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchForm;
