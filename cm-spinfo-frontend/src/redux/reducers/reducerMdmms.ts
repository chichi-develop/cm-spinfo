import * as ActionType from '../actions/actionsConsMdmms';

export const initialState = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  cm_mdmms: {},
  showListMdmm: false,
  // showList: true,
  isLoading: false,
  isUpdating: false,
  clearSortFilter: true,
  searchHistory: [],
  error: '',
};

// TODO: any
const mdmmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_MDMMS_START:
      return Object.assign({}, state, {
        showListMdmm: false,
        isLoading: true,
        error: '',
      });
    case ActionType.GET_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showListMdmm: true,
        searchHistory: [
          action.payload.searchHistory,
          ...state.searchHistory,
        ].slice(0, 30),
        isLoading: false,
        error: '',
      });
    case ActionType.GET_MDMMS_FAIL:
      return Object.assign({}, state, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        cm_mdmms: {},
        showListMdmm: false,
        isLoading: false,
        error: action.payload.error,
      });

    case ActionType.ADD_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.ADD_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showListMdmm: true,
        isUpdating: false,
        clearSortFilter: true,
        error: '',
      });
    case ActionType.ADD_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    case ActionType.DELETE_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.DELETE_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        showListMdmm: true,
        clearSortFilter: false,
        error: '',
      });
    case ActionType.DELETE_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        showListMdmm: action.payload.error.status !== 404,
        error: action.payload.error,
      });
    case ActionType.EDIT_MDMMS_START:
      return Object.assign({}, state, { isUpdating: true, error: '' });
    case ActionType.EDIT_MDMMS_SUCCEED:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        clearSortFilter: false,
        error: '',
      });
    case ActionType.EDIT_MDMMS_FAIL:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};

export default mdmmsReducer;
