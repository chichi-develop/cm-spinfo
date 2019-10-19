import React, { useEffect, useState, useMemo } from 'react';

// import { Link } from 'react-router-dom'
import moment from 'moment';
import _ from 'lodash';

// import { makeStyles } from '@material-ui/core/styles';
// import { blue } from '@material-ui/core/colors';
import {
  // Delete as DeleteIcon,
  // Edit as EditIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@material-ui/icons';

import { Aclgs } from '../../redux/actions/models';

// import CircularProgress from '@material-ui/core/CircularProgress';

// import Modal from '../common/Modal';

// import MdmmEdit from './MdmmModalEdit';
// import MdmmAdd from './MdmmModalAdd';
import './Mdmm.css';

interface AclgProps {
  cm_aclgs: Aclgs;
  // cm_mdmms: Mdmm[];
  showListAclgs: boolean;
  clearSortFilter: boolean;
  // mdmmAdd: Function;
  // mdmmEdit: Function;
  // mdmmDelete: Function;
}

interface AclgTableProps {
  cm_aclgs: Aclgs;
  // cm_mdmms: Mdmm[];
  clearSortFilter: boolean;
  // mdmmEdit: Function;
  // mdmmDelete: Function;
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   icon: {
//     margin: theme.spacing(1),
//   },
//   iconHover: {
//     margin: theme.spacing(1),
//     color: '#668ad8',
//     '&:hover': {
//       // color: '#0b7dda',
//       color: blue[800],
//     },
//   },
// }));

// const Mdmm: React.FC<MdmmProps> = ({
const Aclg: React.FC<AclgProps> = ({
  // cm_mdmms,
  // mdmmAdd,
  // mdmmEdit,
  // mdmmDelete,
  cm_aclgs,
  showListAclgs,
  clearSortFilter,
}) => {
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('Aclg render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  });

  return (
    <div className="mdmmTable">
      {showListAclgs ? (
        <AclgTable cm_aclgs={cm_aclgs} clearSortFilter={clearSortFilter} />
      ) : (
        <p>data nothing</p>
      )}
    </div>
  );
};

const AclgTable: React.FC<AclgTableProps> = ({
  // cm_mdmms,
  cm_aclgs,
  // mdmmEdit,
  // mdmmDelete,
  clearSortFilter,
}) => {
  interface FilterQuery {
    //   md_nmmmbr_key: string;
    //   md_idmdmm?: string;
    //   md_cdcstm?: string;
    //   md_nommrb?: string;
    //   md_nmmmbr?: string;
    //   md_txmdmm?: string;
    //   md_fganch?: string;
    //   md_clmdmm?: string;
    //   md_ccadip?: string;
    //   md_ccmodu?: string;
    //   createdAt?: Date;
    //   updatedAt?: Date;
    al_nmactv_key: string;
    al_idactv?: string;
    al_nmactv?: string;
    al_noactv?: string;
    al_dtactv?: Date;
    al_cdsqsk?: string;
    al_nmsqsk?: string;
    al_nmsqbu?: string;
    al_nmsqtn?: string;
    al_txactv?: string;
    al_susury?: number;
    al_kgtnka?: number;
    al_kggoke?: number;
    al_txbiko?: string;
    al_cdcstm?: string;
    al_nmcstm?: string;
    al_nmtnbu?: string;
    al_nmtnto?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface Sort {
    key: string;
    order: number;
    icon?: any;
  }

  const initialState = {
    al_nmactv: [],
    al_nmactv_key: '',
    sort: {
      key: 'al_nmactv',
      order: 0,
      icon: '',
    },
    filterQuery: {
      al_nmactv_key: '',
    },
  };

  const [aclgs, setAclgs] = useState(cm_aclgs);
  const [al_nmactvs, setNmactvs] = useState<string[]>(initialState.al_nmactv);
  // 検索条件
  const [filterQuery, setFilterQuery] = useState<FilterQuery>(
    initialState.filterQuery,
  );
  // ソート条件
  const [sort, setSort] = useState<Sort>(initialState.sort);

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('MdmmTable render!');
    setAclgs(cm_aclgs);
    setNmactvs(_.uniq(_.map(cm_aclgs, 'al_nmactv')));
    if (clearSortFilter) {
      setFilterQuery({ al_nmactv_key: '' });
      setSort({ key: 'al_nmactv', order: 0, icon: '' });
    }
    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    // return () => console.log('unmounting...');
  }, [cm_aclgs, clearSortFilter]);
  const filteredAclg = useMemo(() => {
    // const filteredMdmm = (() => {
    let tmpAclgs = aclgs;
    // 入力した文字は小文字にする
    const filterTxactv: string | undefined = filterQuery.al_txactv;
    // 絞り込み検索
    tmpAclgs = tmpAclgs.filter(row => {
      // タイトルで絞り込み
      if (
        filterQuery.al_txactv &&
        String(row.al_txactv)
          .toLowerCase()
          .indexOf(filterTxactv || '') === -1
      ) {
        return false;
      }

      // カテゴリーで絞り込み
      if (
        filterQuery.al_nmactv_key &&
        // row.md_nmmmbr !== parseInt(filterQuery.md_nmmmbr_key)
        // row.md_nmmmbr !== md_nmmmbrs[parseInt(filterQuery.md_nmmmbr_key)].title
        row.al_nmactv !== filterQuery.al_nmactv_key
      ) {
        return false;
      }

      return row;
    });
    // ソート
    if (sort.key) {
      tmpAclgs = tmpAclgs.sort((a: any, b: any) => {
        a = a[sort.key];
        b = b[sort.key];

        return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
      });
    }

    return tmpAclgs;
  }, [filterQuery, sort, aclgs]);

  // 入力した情報をfilterQueryに入れる
  const handleFilter = (e: any) => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });
  };

  // 選択したカラムをSortに入れる
  const handleSort = (column: string) => {
    if (sort.key === column) {
      setSort({
        ...sort,
        order: -sort.order,
        icon: -sort.order === 1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />,
      });
    } else {
      setSort({
        key: column,
        order: 1,
        icon: <ArrowDropUpIcon />,
      });
    }
  };

  return (
    <>
      <table className="mdmmTable-table">
        <thead className="mdmmTable-thead">
          <tr>
            <th rowSpan={2} onClick={() => handleSort('al_dtactv')}>
              <p>
                日付
                {sort.key === 'al_dtactv' ? sort.icon : ''}
              </p>
            </th>
            <th rowSpan={2} onClick={() => handleSort('al_noactv')}>
              <p>メモ連番 {sort.key === 'al_noactv' ? sort.icon : ''}</p>
            </th>
            <th onClick={() => handleSort('al_nmactv')}>
              <p>区分{sort.key === 'al_nmactv' ? sort.icon : ''}</p>
            </th>
            <th onClick={() => handleSort('al_txactv')}>
              <p>商品名{sort.key === 'al_txactv' ? sort.icon : ''}</p>
            </th>
            <th rowSpan={2}>
              <p>送り先</p>
            </th>
            <th rowSpan={2}>
              <p>数量</p>
            </th>
            <th rowSpan={2}>
              <p>金額</p>
            </th>
          </tr>
          <tr>
            <th>
              <select
                name="al_nmactv_key"
                // value={filterQuery.md_nmmmbr_key||""}
                value={filterQuery.al_nmactv_key}
                onChange={handleFilter}
              >
                <option value="">選択</option>
                {al_nmactvs.map((item: string) => {
                  return (
                    // <option key={index} value={item}>
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <input
                type="text"
                name="al_txactv"
                placeholder="絞り込み検索"
                value={filterQuery.al_txactv || ''}
                onChange={handleFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody className="mdmmTable-tbody">
          {filteredAclg.map(aclg => {
            return (
              <tr key={aclg.al_idactv}>
                <td>{moment(aclg.al_dtactv).format('YYYY/MM/DD')}</td>
                <td style={{ textAlign: 'right' }}>{aclg.al_noactv}</td>
                <td>{aclg.al_nmactv}</td>
                <td>{aclg.al_txactv}</td>
                <td>{aclg.al_nmcstm}</td>
                <td style={{ textAlign: 'right' }}>{aclg.al_susury}</td>
                <td style={{ textAlign: 'right' }}>
                  {aclg.al_kggoke.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Aclg;
