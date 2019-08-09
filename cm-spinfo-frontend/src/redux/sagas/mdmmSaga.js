import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as ActionType from '../actions/actionsConsMdmms';
import * as Actions from '../actions/actionsMdmms';
import { getMdmmsFactory, deleteMdmmsFactory, editMdmmsFactory, addMdmmsFactory } from './mdmmApi';

function* runGetMdmms(action) {
  const cdcstm = action.payload
  try {
    const mdmms = yield call(getMdmmsFactory, cdcstm )
    const searchHistory = cdcstm
    yield put(Actions.GetMdmms.succeed({searchHistory, mdmms}))
  } catch (error) {
    yield put(Actions.GetMdmms.fail({error}))
  }
}

export function* watchGetMdmms() {
  yield takeLatest(ActionType.GET_MDMMS_START, runGetMdmms)
}

function* runDeleteMdmms(action) {
  const { cdcstm, nommrb } = action.payload
  try {
    const mdmms = yield call(deleteMdmmsFactory, cdcstm, nommrb )
    yield put(Actions.DeleteMdmms.succeed({mdmms}))
  } catch (error) {
    yield put(Actions.DeleteMdmms.fail({error}))
  }
}

export function* watchDeleteMdmms() {
  yield takeLatest(ActionType.DELETE_MDMMS_START, runDeleteMdmms)
}

function* runEditMdmms(action) {
  const { cdcstm, nommrb, mdmm } = action.payload
  try {
    const mdmms = yield call(editMdmmsFactory, cdcstm, nommrb, mdmm )
    yield put(Actions.EditMdmms.succeed({mdmms}))
  } catch (error) {
    yield put(Actions.EditMdmms.fail({error}))
  }
}

export function* watchEditMdmms() {
  yield takeLatest(ActionType.EDIT_MDMMS_START, runEditMdmms)
}


function* runAddMdmms(action) {
  const mdmm = action.payload
  try {
    const mdmms = yield call(addMdmmsFactory, mdmm )
    yield put(Actions.AddMdmms.succeed({mdmms}))
  } catch (error) {
    yield put(Actions.AddMdmms.fail({error}))
  }
}

export function* watchAddMdmms() {
  yield takeLatest(ActionType.ADD_MDMMS_START, runAddMdmms)
}

export default function* rootSaga() {
  yield all([fork(watchGetMdmms),fork(watchDeleteMdmms),fork(watchEditMdmms),fork(watchAddMdmms)])
}
