import React, { useEffect, useCallback } from 'react'
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from './redux/actions/actionsMdmms'

import SearchForm from './components/common/SearchForm'
import Mdmm from './components/mdmm/Mdmm'

import './AppContainer.css';

const AppContainer = () => {

  const mdmmState = useSelector(state => state.mdmms)
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
    console.log('AppContainer render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })

  const AddForm = () => <div>AddForm</div>;
  const EditForm = () => <div>EditForm</div>;

  // react-router-domの定義をrenderからcomponentに変えたが、再レンダリングが増えたため、戻した
  // const mdmmContainer = () => (
  //   <Mdmm state={mdmmState} mdmmDelete={mdmmDelete} />
  // )

  return (
    <>
        <div className="app-body-header">
          <SearchForm state={mdmmState} mdmmSearch={mdmmSearch} />
        </div>

        <div className="app-body-container">
          {/* <Route exact path='/' component={mdmmContainer} /> */}
          <Route exact path='/' render={() => <Mdmm state={mdmmState} mdmmDelete={mdmmDelete} />} />
          {/* renderからcomponentに変えたが、再レンダリングが増えたため、戻した */}
          <Route exact path='/AddForm' component={AddForm} />
          <Route exact path='/EditForm' component={EditForm} />
        </div>

    </>
  )
}

export default AppContainer
