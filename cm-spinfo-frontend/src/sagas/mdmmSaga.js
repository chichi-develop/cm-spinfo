import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as ActionType from '../actions/actionsConsMdmms';
import * as Actions from '../actions/actionsMdmms';
import { getMdmmsFactory } from './mdmmApi';

function* runGetMdmms(action) {
  const cdcstm = action.payload
  try {
    const mdmms = yield call(getMdmmsFactory, cdcstm )
    const searchHistory = cdcstm

    // yield put(Actions.getMdmmsSucceed({searchHistory, mdmms}))
    yield put(Actions.GetMdmms.succeed({searchHistory, mdmms}))
  } catch (error) {
    // yield put(Actions.getMdmmsFail({error}))
    yield put(Actions.GetMdmms.start({error}))
  }
}

export function* watchGetMdmms() {
  yield takeLatest(ActionType.GET_MDMMS_START, runGetMdmms)
}

export default function* rootSaga() {
  yield all([fork(watchGetMdmms)])
}
