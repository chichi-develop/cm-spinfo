import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './MdmmTable.css'

const header = ["更新日", "読者番号", "顧客名", "内容"]

const MdmmTable = (props) => {

  let mdmms = props.mdmms.mdmms.cm_mdmms
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('MdmmTable render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })
  return (
    <div className='mdmmTable'>
      <div className='mdmmTable-header'>
        <p className='mdmmTable-title'>お客様窓口メモ</p>
        <button className='mdmmTable-addButton'>新規メモ登録</button>

      </div>
      { props.mdmms.mdmms.cm_mdmms ?
          <div>
          {/* <table className='mdmmTable-table'> */}
            {/* <MdmmTableHeader data={header} /> */}
            {/* <MdmmTableData data={props.mdmms.mdmms.cm_mdmms} mdmmDelete={props.mdmmDelete} /> */}
            {/* <MdmmTableData data={mdmms} mdmmDelete={props.mdmmDelete} /> */}
          {/* </table> */}
          <Test mdmms={mdmms} mdmmDelete={props.mdmmDelete} />
          </div>
        :
          <p>data nothing</p>
      }
    </div>
  )
}

const MdmmTableHeader = (props) => (
    <thead className='mdmmTable-thead'>
      <tr>
        {props.data.map((h, i) => <th key={i}>{h}</th>)}
        <th style={{padding: '0', width: '4em'}}>編集</th>
        <th style={{padding: '0', width: '4em'}}>削除</th>
      </tr>
    </thead>
)

const MdmmTableData = (props) => {
  return (
    <tbody className='mdmmTable-tbody'>
      {props.data.map(row =>
        <tr key={row.md_idmdmm}>
          <td>{moment(row.updateAt).format('YYYY/MM/DD')}</td>
          <td>{row.md_cdcstm}</td>
          <td>{row.md_cdcstm}</td>
          <td>{row.md_txmdmm}</td>
          <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
            <Link to={`/EditForm/${row.md_idmdmm}`}><EditIcon style={{fontSize: '1.5em'}}/></Link>
          </td>
          <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
            <DeleteIcon style={{fontSize: '1.5em',color: '#668ad8'}}
                        onClick={(e) => {
                          e.preventDefault();
                          props.mdmmDelete({cdcstm:row.md_cdcstm, nommrb:row.md_nommrb});
                        }}/>
          </td>
        </tr>
      )}
    </tbody>
  )
}




const Test = (props) => {
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('MdmmTable-test render!');
    setMdmms( props.mdmms )


    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  }, props.mdmms)
  const initialState = {
        mdmms: props.mdmms,
        md_nmmmbr: [
              {
                  id: 0,
                  title: '問い合わせ'
              },{
                  id: 1,
                  title: '要望'
              },{
                  id: 2,
                  title: 'その他メモ'
              },{
                  id: 3,
                  title: '0'
              }
          ]
    };

  // mdmms
  const [mdmms, setMdmms] = useState(initialState.mdmms);
  const [md_nmmmbrs, setNmmmbrs] = useState(initialState.md_nmmmbr);
  // 検索条件
  const [filterQuery, setFilterQuery] = useState({});
  // ソート条件
  const [sort, setSort] = useState({});



  const filteredMdmm = useMemo(() => {
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
            row.md_nmmmbr !== md_nmmmbrs[parseInt(filterQuery.md_nmmmbr_key)].title
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
                <th onClick={() => handleSort('updatedAt')}>更新日付</th>
                <th>md_txmdmm</th>
                <th>md_nmmmbr</th>
                <th onClick={() => handleSort('md_nmmmbr')}>md_nmmmbr</th>
                <th style={{padding: '0', width: '4em'}}>編集</th>
                <th style={{padding: '0', width: '4em'}}>削除</th>
            </tr>
            <tr>
                <th></th>
                <th>
                  <input type="text" name="md_txmdmm" className="form-input" placeholder="md_txmdmm"
                          value={filterQuery.md_txmdmm || ''}
                          onChange={handleFilter}
                  />
                </th>
                <th>
                  <select
                      name="md_nmmmbr_key"
                      value={filterQuery.md_nmmmbr_key}
                      onChange={handleFilter}
                  >
                      <option value="">md_nmmmbr選択</option>
                      {
                          md_nmmmbrs.map((item) => {
                              return (
                                  <option
                                      key={item.id}
                                      value={item.id}>
                                      {item.title}
                                  </option>
                              );
                          })
                      }
                  </select>
                </th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody className='mdmmTable-tbody'>
            {
                filteredMdmm.map((mdmm) => {
                    return(
                        <tr key={mdmm.md_idmdmm}>
                            <td>{mdmm.updatedAt}</td>
                            <td>{mdmm.md_txmdmm}</td>
                            {/* <td>{mdmm.md_idmdmm}</td> */}
                            <td>{mdmm.md_nmmmbr}</td>
                            <td>
                            {
                                mdmm.md_nmmmbr ?
                                // md_nmmmbrs.find(c => c.id === mdmm.md_nmmmbr).title : ''
                                md_nmmmbrs.find(c => c.title === mdmm.md_nmmmbr).title : ''
                            }
                            </td>
                            <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
                              <Link to={`/EditForm/${mdmm.md_idmdmm}`}><EditIcon style={{fontSize: '1.5em'}}/></Link>
                            </td>
                            <td style={{padding: '0', textAlign: 'center', width: '3em'}}>
                              <DeleteIcon style={{fontSize: '1.5em',color: '#668ad8'}}
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
  );
}



export default MdmmTable