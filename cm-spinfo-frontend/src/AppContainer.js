import React, { useEffect, useCallback } from 'react'
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from './redux/actions/actionsMdmms'

import SearchForm from './components/common/SearchForm'
import Mdmm from './components/mdmm/Mdmm'
// import MdmmEdit from './components/mdmm/MdmmEdit'

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

  const mdmmEdit = useCallback(
    ({cdcstm, nommrb, mdmm}) => dispatch( Actions.EditMdmms.start({cdcstm, nommrb, mdmm}) ),
    [dispatch]
  )

  const mdmmAdd = useCallback(
    (mdmm) => dispatch( Actions.AddMdmms.start(mdmm) ),
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
  // const EditForm = () => <MdmmEdit/>

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
        <Route exact path='/' render={() => <Mdmm state={mdmmState} mdmmDelete={mdmmDelete} mdmmEdit={mdmmEdit} mdmmAdd={mdmmAdd}/>} />
        {/* TODO: renderからcomponentに変えたが、再レンダリングが増えた(mdmm.js/mdmmTableの再render)ため、戻した */}
        <Route exact path='/AddForm' component={AddForm} />
        {/* <Route path='/EditForm' component={EditForm} /> */}
      </div>

    </>
  )
}

export default AppContainer
