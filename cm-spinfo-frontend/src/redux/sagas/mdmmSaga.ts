import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/actionsConsMdmms';
import * as actions from '../actions/actionsMdmms';
import {
  getMdmmsFactory,
  deleteMdmmsFactory,
  editMdmmsFactory,
  addMdmmsFactory,
} from './mdmmApi';
import { getAclgsFactory } from './aclgApi';

function* runGetMdmms(action: ReturnType<typeof actions.getMdmmsStart>) {
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const mdmms = yield call(getMdmmsFactory, action.payload.cdcstm);
    yield put({
      type: types.getMdmmsSucceed,
      searchHistory: action.payload.cdcstm,
      mdmms,
    });
  } catch (error) {
    yield put({ type: types.getMdmmsFail, error });
  }
}

export function* watchGetMdmms() {
  yield takeLatest(types.getMdmmsStart, runGetMdmms);
}

function* runGetAclgs(action: ReturnType<typeof actions.getAclgsStart>) {
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const aclgs = yield call(getAclgsFactory, action.payload.cdcstm);
    yield put({
      type: types.getAclgsSucceed,
      searchHistory: action.payload.cdcstm,
      aclgs,
    });
  } catch (error) {
    yield put({ type: types.getAclgsFail, error });
  }
}

export function* watchGetAclgs() {
  yield takeLatest(types.getAclgsStart, runGetAclgs);
}

function* runDeleteMdmms(action: ReturnType<typeof actions.deleteMdmmsStart>) {
  const { cdcstm, nommrb } = action.payload;
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const mdmms = yield call(deleteMdmmsFactory, cdcstm, nommrb);
    yield put({
      type: types.deleteMdmmsSucceed,
      mdmms,
    });
  } catch (error) {
    yield put({
      type: types.deleteMdmmsFail,
      showListMdmm: error.status !== 404,
      error,
    });
  }
}

export function* watchDeleteMdmms() {
  yield takeLatest(types.deleteMdmmsStart, runDeleteMdmms);
}

function* runEditMdmms(action: ReturnType<typeof actions.editMdmmsStart>) {
  const { cdcstm, nommrb, mdmm } = action.payload;
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const mdmms = yield call(editMdmmsFactory, cdcstm, nommrb, mdmm);
    yield put({
      type: types.editMdmmsSucceed,
      mdmms,
    });
  } catch (error) {
    yield put({
      type: types.editMdmmsFail,
      error,
    });
  }
}

export function* watchEditMdmms() {
  yield takeLatest(types.editMdmmsStart, runEditMdmms);
}

function* runAddMdmms(action: ReturnType<typeof actions.addMdmmsStart>) {
  const { mdmm } = action.payload;
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const mdmms = yield call(addMdmmsFactory, mdmm);
    yield put({
      type: types.addMdmmsSucceed,
      mdmms,
    });
  } catch (error) {
    yield put({
      type: types.addMdmmsFail,
      error,
    });
  }
}

export function* watchAddMdmms() {
  yield takeLatest(types.addMdmmsStart, runAddMdmms);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAclgs),
    fork(watchGetMdmms),
    fork(watchDeleteMdmms),
    fork(watchEditMdmms),
    fork(watchAddMdmms),
  ]);
}
