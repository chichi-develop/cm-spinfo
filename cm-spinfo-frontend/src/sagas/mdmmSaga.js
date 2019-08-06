import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as ActionType from '../actions/actionsConsMdmms';
import * as Actions from '../actions/actionsMdmms';
import { getMdmmsFactory, deleteMdmmsFactory } from './mdmmApi';

function* runGetMdmms(action) {
  const cdcstm = action.payload
  try {
    const mdmms = yield call(getMdmmsFactory, cdcstm )
    const searchHistory = cdcstm

    // yield put(Actions.getMdmmsSucceed({searchHistory, mdmms}))
    yield put(Actions.GetMdmms.succeed({searchHistory, mdmms}))
  } catch (error) {
    // yield put(Actions.getMdmmsFail({error}))
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

    // yield put(Actions.GetMdmms.start({cdcstm}))
    yield put(Actions.DeleteMdmms.succeed({mdmms}))
  } catch (error) {
    // yield put(Actions.getMdmmsFail({error}))
    yield put(Actions.DeleteMdmms.fail({error}))
  }
}

export function* watchDeleteMdmms() {
  yield takeLatest(ActionType.DELETE_MDMMS_START, runDeleteMdmms)
}

export default function* rootSaga() {
  yield all([fork(watchGetMdmms),fork(watchDeleteMdmms)])
}
