import React from 'react'

import './SearchForm.css';

const SearchForm = (props) => (
  <>
    <form className="searchForm">
      <input type="text" placeholder="Search.." name="search" />
      {/* <button type="submit"><i class="material-icons">search</i></button> */}
      <button onClick={() =>  this.props.history.push('/AddForm')}><i className="material-icons">search</i></button>
    </form>
    <div className="searchForm-currentContainer">
      <p className="searchForm-currentData">後藤　直</p>
      <p className="searchForm-currentMessage">様の履歴一覧です。</p>
    </div>
  </>
)

export default SearchForm