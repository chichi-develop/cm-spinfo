import * as ActionType from './actionsConsMdmms'

export const GetMdmms = {
  start: (payload) => ({ type: ActionType.GET_MDMMS_START, payload }),
  succeed: (payload) => ({ type: ActionType.GET_MDMMS_SUCCEED, payload }),
  fail: (payload) => ({ type: ActionType.GET_MDMMS_FAIL, payload })
}


// export function getMdmmsStart(payload) {
//   return { type: ActionType.GET_MDMMS_START, payload }
// }

// export function getMdmmsSucceed(payload) {
//   return { type: ActionType.GET_MDMMS_SUCCEED, payload }
// }

// export function getMdmmsFail(payload) {
//   return { type: ActionType.GET_MDMMS_FAIL, payload }
// }