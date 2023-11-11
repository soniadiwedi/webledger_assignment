import React from 'react'

const Search = (props) => {
  return (
    <div>
      <input type="search" onChange={props.handleInput} />
    </div>
  )
}

export default Search