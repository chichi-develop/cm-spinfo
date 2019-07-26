import React from 'react'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './MdmmTable.css'

const header = ["読者番号", "顧客名", "住所", "郵便番号"]

const MdmmTable = (props) => (
  <div className='mdmmTable'>
    <div className='mdmmTable-header'>
      <p className='mdmmTable-title'>お客様窓口メモ</p>
      <button className='mdmmTable-addButton'>新規メモ登録</button>
    </div>
    {/* <p className='mdmmTable-showSwitch'>全表示</p> */}

    { props.mdmms.mdmms.cm_mdmms ? <p>OK!</p> : <p>NG</p>}

    { props.mdmms.mdmms.cm_mdmms ?
        <table className='mdmmTable-table'><HonbanMdmmTableData data={props.mdmms.mdmms.cm_mdmms}/></table>
      :
        <p>nashi</p>
    }

    <table className='mdmmTable-table'>
      <MdmmTableHeader data={header} />
      <MdmmTableData data={props.data} />
    </table>
  </div>
)

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
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.address}</td>
          <td>{row.zip}</td>
          <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/EditForm/${row.id}`}><EditIcon style={{fontSize: '1.5em'}}/></Link></td>
          <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/DeleteForm/${row.id}`}><DeleteIcon style={{fontSize: '1.5em'}}/></Link></td>
        </tr>
      )}
    </tbody>
)

const HonbanMdmmTableData = (props) => (
  <tbody className='mdmmTable-tbody'>
    {props.data.map(row =>
      <tr key={row.md_idmdmm}>
        <td>{row.md_idmdmm}</td>
        <td>{row.md_cdcstm}</td>
        <td>{row.md_txmdmm}</td>
        <td>{row.updateAt}</td>
        <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/EditForm/${row.id}`}><EditIcon style={{fontSize: '1.5em'}}/></Link></td>
        <td style={{padding: '0', textAlign: 'center', width: '3em'}}><Link to={`/DeleteForm/${row.id}`}><DeleteIcon style={{fontSize: '1.5em'}}/></Link></td>
      </tr>
    )}
  </tbody>
)

export default MdmmTable