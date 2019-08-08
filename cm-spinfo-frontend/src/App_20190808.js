import React, { useEffect, useCallback } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from './redux/actions/actionsMdmms'

import NavigationBar from './components/common/NavigationBar'
import SearchForm from './components/common/SearchForm'
import MdmmTable from './components/mdmm/MdmmTable'
import Footer from './components/common/Footer'

import './App.css';

const AddForm = () => <div>AddForm</div>;
const EditForm = () => <div>EditForm</div>;

const title = '「致知」顧客情報参照システム'
const footer = 'Chichi Publishing Co.,Ltd. © 2019'

const App = () => {
  const mdmms = useSelector(state => state.mdmms)
  const dispatch = useDispatch()

  const mdmmSearch = useCallback(
    (cdcstm) => dispatch( Actions.GetMdmms.start(cdcstm) ),
    // (cdcstm) => dispatch({ type: ActionType.GET_MDMMS_START, payload: cdcstm }),
    [dispatch]
  )

  const mdmmDelete = useCallback(
    ({cdcstm, nommrb}) => dispatch( Actions.DeleteMdmms.start({cdcstm, nommrb}) ),
    [dispatch]
  )

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('App render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })

  return (
    <div className="app">

      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>{title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>

      <NavigationBar title={title} />

      <div className="app-body">

        <div className="app-body-header">
          <SearchForm mdmms={mdmms} mdmmSearch={mdmmSearch} />
        </div>

        <div className="app-body-container">
          <Route exact path='/' render={() => <MdmmTable mdmms={mdmms} mdmmDelete={mdmmDelete} />} />
          <Route exact path='/AddForm' component={AddForm} />
          <Route exact path='/EditForm' component={EditForm} />
        </div>

      </div>

      <Footer footer={footer} />

    </div>
  )
}

export default withRouter(App)
