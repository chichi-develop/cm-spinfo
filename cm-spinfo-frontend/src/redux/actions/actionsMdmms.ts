import types from './actionsConsMdmms';
import { Mdmms, Mdmm } from './models';

export const getAclgsStart = (cdcstm: string) => ({
  type: types.getAclgsStart,
  payload: { cdcstm },
});
export const getAclgsSucceed = (searchHistory: object, aclgs: object) => ({
  type: types.getAclgsSucceed,
  payload: { searchHistory, aclgs },
});
export const getAclgsFail = (error: object) => ({
  type: types.getAclgsFail,
  payload: { error },
});

export const getMdmmsStart = (cdcstm: string) => ({
  type: types.getMdmmsStart,
  payload: { cdcstm },
});
export const getMdmmsSucceed = (searchHistory: object, mdmms: Mdmms) => ({
  type: types.getMdmmsSucceed,
  payload: { searchHistory, mdmms },
});
export const getMdmmsFail = (error: object) => ({
  type: types.getMdmmsFail,
  payload: { error },
});

export const editMdmmsStart = (cdcstm: string, nommrb: number, mdmm: Mdmm) => ({
  type: types.editMdmmsStart,
  payload: { cdcstm, nommrb, mdmm },
  meta: { confirm: '更新してよろしいですか？' },
});
export const editMdmmsSucceed = (mdmms: Mdmms) => ({
  type: types.editMdmmsSucceed,
  payload: { mdmms },
});
export const editMdmmsFail = (error: object) => ({
  type: types.editMdmmsFail,
  payload: { error },
});

export const deleteMdmmsStart = (cdcstm: string, nommrb: number) => ({
  type: types.deleteMdmmsStart,
  payload: { cdcstm, nommrb },
  meta: { confirm: '削除してよろしいですか？' },
});
export const deleteMdmmsSucceed = (mdmms: Mdmms) => ({
  type: types.deleteMdmmsSucceed,
  payload: { mdmms },
});
export const deleteMdmmsFail = (error: object, showListMdmms: boolean) => ({
  type: types.deleteMdmmsFail,
  payload: { error, showListMdmms },
});

export const addMdmmsStart = (mdmm: Mdmm) => ({
  type: types.addMdmmsStart,
  payload: { mdmm },
  meta: { confirm: '登録してよろしいですか？' },
});
export const addMdmmsSucceed = (mdmms: Mdmms) => ({
  type: types.addMdmmsSucceed,
  payload: { mdmms },
});
export const addMdmmsFail = (error: object) => ({
  type: types.addMdmmsFail,
  payload: { error },
});
