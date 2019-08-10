import React, { useEffect, useState, useMemo } from 'react'

// import { Link } from 'react-router-dom'
import moment from 'moment'
import _ from 'lodash'

import { Delete, Edit } from '@material-ui/icons'
// import CloseIcon from '@material-ui/icons/Close'
// import CircularProgress from '@material-ui/core/CircularProgress';

import Modal from '../common/Modal'

import MdmmEdit from './MdmmModalEdit'
import MdmmAdd from './MdmmModalAdd'
import './Mdmm.css'

const Mdmm = (props) => {

  let mdmms = props.state.cm_mdmms
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('Mdmm render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })

  return (
    <div className='mdmmTable'>
      <div className='mdmmTable-header'>
        <p className='mdmmTable-title'>お客様窓口メモ</p>

        <Modal
          title="新規メモ登録"
          open={handleOpenModal => <button className='mdmmTable-addButton' onClick={handleOpenModal}>新規メモ登録</button>}
          content={() => <MdmmAdd mdmmAdd={props.mdmmAdd}/>}
          outClickClose={false}
        />

      </div>

      {/* { props.state.isLoading && (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress style={{margin: '10px' }} />
        </div>
        )
      } */}

      { props.state.cm_mdmms ? (
          <MdmmTable mdmms={mdmms} mdmmDelete={props.mdmmDelete} mdmmEdit={props.mdmmEdit}/>
        ) : (
          <p>data nothing</p>
        )
      }

    </div>
  )
}

const MdmmTable = (props) => {
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('MdmmTable render!');
    setMdmms( props.mdmms )
    setNmmmbrs( _.uniq(_.map(props.mdmms, 'md_nmmmbr')) )
    setFilterQuery({md_nmmmbr_key:""})
    setSort({})

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  }, [props.mdmms])

  const initialState = {
    mdmms: [],
    md_nmmmbr: [],
    md_nmmmbr_key:"",
    sort:"",
  };

  const [mdmms, setMdmms] = useState(initialState.mdmms)
  const [md_nmmmbrs, setNmmmbrs] = useState(initialState.md_nmmmbr)
  const [filterQuery, setFilterQuery] = useState(initialState.md_nmmmbr_key) // 検索条件
  const [sort, setSort] = useState(initialState.sort) // ソート条件

  const filteredMdmm = useMemo(() => {
  // const filteredMdmm = (() => {
    let tmpMdmms = mdmms;

    // 入力した文字は小文字にする
    const filterTxmdmm = filterQuery.md_txmdmm

    // 絞り込み検索
    tmpMdmms = tmpMdmms.filter(row => {

      // タイトルで絞り込み
      if (
        filterQuery.md_txmdmm &&
        String(row.md_txmdmm).toLowerCase().indexOf(filterTxmdmm) === -1
      ) {
        return false;
      }

      // カテゴリーで絞り込み
      if (
        filterQuery.md_nmmmbr_key &&
        // row.md_nmmmbr !== parseInt(filterQuery.md_nmmmbr_key)
        // row.md_nmmmbr !== md_nmmmbrs[parseInt(filterQuery.md_nmmmbr_key)].title
        row.md_nmmmbr !== filterQuery.md_nmmmbr_key
      ) {
        return false;
      }
      return row;
    });

    // ソート
    if (sort.key) {
      tmpMdmms = tmpMdmms.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];
        return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
      });
    }

    return tmpMdmms;
  }, [filterQuery, sort, mdmms]);
  // })();

  // 入力した情報をfilterQueryに入れる
  const handleFilter = e => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });
  };

  // 選択したカラムをSortに入れる
  const handleSort = column => {
    if (sort.key === column) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: column,
        order: 1
      })
    }
  };
  return (
    <>
      <table className='mdmmTable-table'>
        <thead className='mdmmTable-thead'>
        <tr>
          <th rowSpan="2" onClick={() => handleSort('updatedAt')}>更新日付</th>
          <th rowSpan="2" onClick={() => handleSort('md_nommrb')}>メモ連番</th>
          <th onClick={() => handleSort('md_nmmmbr')}>メモ分類</th>
          <th onClick={() => handleSort('md_txmdmm')}>内容</th>
          <th rowSpan="2" style={{padding: '0', width: '4em'}}>編集</th>
          <th rowSpan="2" style={{padding: '0', width: '4em'}}>削除</th>
        </tr>
        <tr>
          <th>
            <select
              name="md_nmmmbr_key"
              // value={filterQuery.md_nmmmbr_key||""}
              value={filterQuery.md_nmmmbr_key}
              onChange={handleFilter}
            >
              <option value="">選択</option>
              {
                md_nmmmbrs.map((item,index) => {
                  return (
                    <option
                      key={index}
                      value={item}>
                      {item}
                    </option>
                  );
                })
              }
            </select>
          </th>
            <th>
              <input type="text" name="md_txmdmm" className="form-input" placeholder="絞り込み検索"
                      value={filterQuery.md_txmdmm || ''}
                      onChange={handleFilter}
              />
            </th>
        </tr>
        </thead>
          <tbody className='mdmmTable-tbody'>
          {
            filteredMdmm.map((mdmm) => {
              return(
                <tr key={mdmm.md_idmdmm}>
                  {/* TODO: 日付が正しく表示されない */}
                  <td>{moment(mdmm.updateAt).format('YYYY/MM/DD')}</td>
                  <td>{mdmm.md_nommrb}</td>
                  <td>{mdmm.md_nmmmbr}</td>
                  <td>{mdmm.md_txmdmm}</td>
                  {/* {
                      mdmm.md_nmmmbr ?
                        md_nmmmbrs.find(c => c.id === mdmm.md_nmmmbr).title : ''
                  } */}
                  <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
                    {/* <Link to={`/EditForm/${mdmm.md_idmdmm}`}><EditIcon style={{fontSize: '1.5em'}}/></Link> */}
                    <Modal
                      title="メモ編集"
                      open={handleOpenModal => <Edit style={{fontSize: '1.5em', color: '#668ad8'}} onClick={handleOpenModal} />}
                      content={() => <MdmmEdit mdmm={mdmm} mdmmEdit={props.mdmmEdit}/>}
                      outClickClose={false}
                    />
                  </td>
                  {/* TODO: delete後にフィルタ、ソートが解除されてしまう */}
                  <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
                    <Delete style={{fontSize: '1.5em', color: '#668ad8'}}
                                onClick={(e) => {
                                  e.preventDefault();
                                  props.mdmmDelete({cdcstm:mdmm.md_cdcstm, nommrb:mdmm.md_nommrb});
                                }}/>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Mdmm