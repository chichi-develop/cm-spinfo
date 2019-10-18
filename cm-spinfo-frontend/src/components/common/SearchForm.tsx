import React, { useState, useEffect } from 'react';
import { Mdmms, Aclgs } from '../../redux/actions/models';

import './SearchForm.css';

import * as actions from '../../redux/actions/actionsMdmms';

interface SearchProps {
  cm_mdmms: Mdmms | {};
  cm_aclgs: Aclgs | {};
  showListMdmm: boolean;
  showListAclgs: boolean;
  searchHistory: string[];
  mdmmSearch: typeof actions.getMdmmsStart;
  aclgSearch: typeof actions.getAclgsStart;
}

export const SearchForm: React.FC<SearchProps> = ({
  cm_mdmms,
  cm_aclgs,
  showListMdmm,
  showListAclgs,
  searchHistory,
  mdmmSearch,
  aclgSearch,
}) => {
  const [searchKey, setSearchKey] = useState('0');

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('SearchForm render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  return (
    <div className="searchForm-container">
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search.."
          onChange={e => {
            setSearchKey(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            mdmmSearch(searchKey);
            aclgSearch(searchKey);
          }}
        >
          <i className="material-icons">search</i>
        </button>
      </form>

      <div className="searchForm-currentContainer">
        {showListAclgs && (
          <>
            <p className="searchForm-currentData">{cm_aclgs[0].al_nmsqsk}</p>
            <p className="searchForm-currentData">{cm_aclgs[0].al_nmsqtn}</p>
            <p className="searchForm-currentMessage">様の履歴一覧です。</p>
          </>
        )}
        {!showListAclgs && showListMdmm && (
          <>
            <p className="searchForm-currentData">{cm_mdmms[0].md_cdcstm}</p>
            <p className="searchForm-currentMessage">様の履歴一覧です。</p>
          </>
        )}
        {!showListAclgs && !showListMdmm && (
          <p className="searchForm-currentMessage">
            読者番号を入力し、検索してください。
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
