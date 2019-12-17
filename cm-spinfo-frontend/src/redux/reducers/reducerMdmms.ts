import types from '../actions/actionsConsSpinfos';
import { Actions } from '../actions/actions';
import { Mdmms } from '../actions/models';

interface MdmmsState {
  cm_mdmms: Mdmms | [];
  showListMdmms: boolean;
  isLoading: boolean;
  isUpdating: boolean;
  clearSortFilter: boolean;
  searchHistory: [];
  error: {};
}

export const initialState = (injects?: MdmmsState): MdmmsState => ({
  // eslint-disable-next-line @typescript-eslint/camelcase
  cm_mdmms: [],
  showListMdmms: false,
  // showList: true,
  isLoading: false,
  isUpdating: false,
  clearSortFilter: true,
  searchHistory: [],
  error: {},
  ...injects,
});

export const mdmmsReducer = (state = initialState(), action: Actions) => {
  switch (action.type) {
    case types.getMdmmsStart:
      return Object.assign({}, state, {
        showListMdmms: false,
        isLoading: true,
        error: {},
      });
    case types.getMdmmsSucceed:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showListMdmms: true,
        searchHistory: [
          action.payload.searchHistory,
          ...state.searchHistory,
        ].slice(0, 30),
        isLoading: false,
        error: {},
      });
    case types.getMdmmsFail:
      return Object.assign({}, state, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        cm_mdmms: {},
        showListMdmms: false,
        isLoading: false,
        error: action.payload.error,
      });

    case types.addMdmmsStart:
      return Object.assign({}, state, { isUpdating: true, error: {} });
    case types.addMdmmsSucceed:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        showListMdmms: true,
        isUpdating: false,
        clearSortFilter: true,
        error: {},
      });
    case types.addMdmmsFail:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    case types.deleteMdmmsStart:
      return Object.assign({}, state, { isUpdating: true, error: {} });
    case types.deleteMdmmsSucceed:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        showListMdmms: true,
        clearSortFilter: false,
        error: {},
      });
    case types.deleteMdmmsFail:
      return Object.assign({}, state, {
        isUpdating: false,
        showListMdmms: action.payload.showListMdmms,
        error: action.payload.error,
      });
    case types.editMdmmsStart:
      return Object.assign({}, state, { isUpdating: true, error: {} });
    case types.editMdmmsSucceed:
      return Object.assign({}, state, {
        ...action.payload.mdmms,
        isUpdating: false,
        clearSortFilter: false,
        error: {},
      });
    case types.editMdmmsFail:
      return Object.assign({}, state, {
        isUpdating: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};

export default mdmmsReducer;
