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
          <table className='mdmmTable-table'>
            <MdmmTableHeader data={header} />
            {/* <MdmmTableData data={props.mdmms.mdmms.cm_mdmms} mdmmDelete={props.mdmmDelete} /> */}
            <MdmmTableData data={mdmms} mdmmDelete={props.mdmmDelete} />
          </table>
        :
          <p>data nothing</p>
      }
      <Test />
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




const Test = () => {
  const initialState = {
        tasks: [
            {
                id: 1,
                title: '最初のタスク',
                md_nmmmbr: '問い合わせ',
                category: 1
            },{
                id: 2,
                title: '2番目のタスク',
                md_nmmmbr: '要望',
                category: 2
            },{
                id: 3,
                title: '3番目のタスク',
                md_nmmmbr: 'その他メモ',
                category: 1
            }
        ],
        categories: [
            {
                id: 1,
                title: 'カテゴリー1'
            },{
                id: 2,
                title: 'カテゴリー2'
            }
        ]
    };

  // タスク
  const [tasks, setTasks] = useState(initialState.tasks);
  // カテゴリー
  const [categories, setCategories] = useState(initialState.categories);
  // 検索条件
  const [filterQuery, setFilterQuery] = useState({});
  // ソート条件
  const [sort, setSort] = useState({});



  const filteredTask = useMemo(() => {
    let tmpTasks = tasks;

    // 入力した文字は小文字にする
    const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();

    // 絞り込み検索
    tmpTasks = tmpTasks.filter(row => {

        // タイトルで絞り込み
        if (
            filterQuery.title &&
            String(row.title).toLowerCase().indexOf(filterTitle) === -1
        ) {
            return false;
        }

        // カテゴリーで絞り込み
        if (
            filterQuery.category_id &&
            row.category !== parseInt(filterQuery.category_id)
        ) {
            return false;
        }
        return row;
    });

    // ソート
    if (sort.key) {
        tmpTasks = tmpTasks.sort((a, b) => {
            a = a[sort.key];
            b = b[sort.key];
            return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
        });
    }

    return tmpTasks;
  }, [filterQuery, sort, tasks]);

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
    <div className="wrap">
        <div className="filter-box">
            <div className="input-group">
                <input type="text" name="title" className="form-input" placeholder="タイトル"
                        value={filterQuery.title || ''}
                        onChange={handleFilter}
                />
            </div>
            <div className="input-group">
                <div className="selectbox">
                    <select
                        name="category_id"
                        value={filterQuery.category_id}
                        onChange={handleFilter}
                    >
                        <option value="">カテゴリー選択</option>
                        {
                            categories.map((item) => {
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
                </div>
            </div>
        </div>

        <table>
            <thead>
            <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th>タイトル</th>
                <th>分類</th>
                <th onClick={() => handleSort('category')}>カテゴリー</th>
            </tr>
            </thead>
            <tbody>
            {
                filteredTask.map((task) => {
                    return(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.md_nmmmbr}</td>
                            <td>
                            {
                                task.category ?
                                categories.find(c => c.id === task.category).title : ''
                            }
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </div>
  );
}



export default MdmmTable