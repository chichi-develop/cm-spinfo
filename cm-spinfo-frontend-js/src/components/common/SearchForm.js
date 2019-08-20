import React, { useState, useEffect } from 'react'

import './SearchForm.css';


function SearchForm (props) {

  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('SearchForm render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })

  return (
    <div className="searchForm-container">
      <form className="searchForm">
        <input type="text" placeholder="Search.." onChange={(e) => {setSearchKey(e.target.value)}} />
        <button onClick={(e) => {e.preventDefault(); props.mdmmSearch(searchKey)}}><i className="material-icons">search</i></button>
      </form>
      <div className="searchForm-currentContainer">

        { props.state.showList ?
            <>
              <p className="searchForm-currentData">{props.state.cm_mdmms[0].md_cdcstm}</p>
              <p className="searchForm-currentMessage">様の履歴一覧です。</p>
            </>
          :
            <p className="searchForm-currentMessage">読者番号を入力し、検索してください。</p>
        }
      </div>
    </div>
  )
}

export default SearchForm