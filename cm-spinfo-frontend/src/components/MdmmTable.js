import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './MdmmTable.css'

const header = ["更新日", "読者番号", "顧客名", "内容"]

const MdmmTable = (props) => {
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
          <table className='mdmmTable-table'>
            <MdmmTableHeader data={header} />
            <MdmmTableData data={props.mdmms.mdmms.cm_mdmms}/>
          </table>
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

const MdmmTableData = (props) => (
  <tbody className='mdmmTable-tbody'>
    {props.data.map(row =>
      <tr key={row.md_idmdmm}>
        <td>{row.updateAt}</td>
        <td>{row.md_cdcstm}</td>
        <td>{row.md_cdcstm}</td>
        <td>{row.md_txmdmm}</td>
        <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/EditForm/${row.id}`}><EditIcon style={{fontSize: '1.5em'}}/></Link></td>
        <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/DeleteForm/${row.id}`}><DeleteIcon style={{fontSize: '1.5em'}}/></Link></td>
      </tr>
    )}
  </tbody>
)

export default MdmmTable