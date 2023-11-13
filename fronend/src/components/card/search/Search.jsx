import React from 'react';
import { FiSearch } from 'react-icons/fi'; 

const Search = (props) => {
  return (
    <div style={{margin:"20px"}}>
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="search"
          onChange={props.handleInput}
          placeholder='Search...'
        />
      </div>
    </div>
  );
}

export default Search;
