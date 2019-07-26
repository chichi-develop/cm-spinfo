import React, { useState } from 'react'

import './SearchForm.css';


function SearchForm (props) {

  const [searchKey, setSearchKey] = useState(0);

  return (
    <div className="searchForm-container">
      <form className="searchForm">
        <input type="text" placeholder="Search.." onChange={(e) => {setSearchKey(e.target.value)}} />
        <button onClick={(e) => {e.preventDefault(); props.mdmmSearch(searchKey)}}><i className="material-icons">search</i></button>
      </form>
      <div className="searchForm-currentContainer">
        <p className="searchForm-currentData">後藤　直</p>
        <p className="searchForm-currentMessage">様の履歴一覧です。</p>
      </div>
    </div>
  )
}

export default SearchForm