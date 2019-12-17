import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/actionsConsSpinfos';
import * as actions from '../actions/actionsSpinfo';
import {
  getMdmmsFactory,
  deleteMdmmsFactory,
  editMdmmsFactory,
  addMdmmsFactory,
} from './mdmmApi';
import { getAclgsFactory } from './aclgApi';

function* runGetMdmms(action: ReturnType<typeof actions.getMdmmsStart>) {
  const { cdcstm } = action.payload;
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const mdmms = yield call(getMdmmsFactory, cdcstm);
    console.log('getMdmms OK!!!');
    console.log(mdmms);
    yield put({
      type: types.getMdmmsSucceed,
      payload: {
        searchHistory: cdcstm,
        // mdmms: mdmms.cm_mdmms,
        mdmms,
      },
    });
  } catch (error) {
    yield put({ type: types.getMdmmsFail, payload: { error } });
  }
}

export function* watchGetMdmms() {
  yield takeLatest(types.getMdmmsStart, runGetMdmms);
}

function* runGetAclgs(action: ReturnType<typeof actions.getAclgsStart>) {
  const { cdcstm } = action.payload;
  try {
    // TODO: TS データかエラーが返ってくる場合にはどう型を付けるべきか
    const aclgs = yield call(getAclgsFactory, cdcstm);
    console.log('getAclgs OK!!!');
    console.log(aclgs);
    yield put({
      type: types.getAclgsSucceed,
      payload: {
        searchHistory: cdcstm,
        // aclgs: aclgs.cm_aclgs,
        aclgs,
      },
    });
  } catch (error) {
    yield put({
      type: types.getAclgsFail,
      payload: {
        showListAclgs: error.status !== 404,
        error,
      },
    });
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
      // mdmms: mdmms.cm_mdmms,
      payload: { mdmms },
    });
  } catch (error) {
    yield put({
      type: types.deleteMdmmsFail,
      payload: {
        showListMdmms: error.status !== 404,
        error,
      },
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
      // payload: { mdmms: mdmms.cm_mdmms },
      payload: { mdmms },
    });
  } catch (error) {
    yield put({
      type: types.editMdmmsFail,
      payload: { error },
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
      payload: { mdmms },
    });
  } catch (error) {
    yield put({
      type: types.addMdmmsFail,
      payload: { error },
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
