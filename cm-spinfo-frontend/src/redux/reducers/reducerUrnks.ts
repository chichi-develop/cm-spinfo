import types from '../actions/actionsConsSpinfos';
import { Actions } from '../actions/actions';
import { Urnks } from '../actions/models';

interface UrnksState {
  cm_urnks: Urnks | [];
  showListUrnks: boolean;
  clearSortFilter: boolean;
  searchHistory: [];
  error: {};
}

export const initialState = (injects?: UrnksState): UrnksState => ({
  // eslint-disable-next-line @typescript-eslint/camelcase
  cm_urnks: [],
  showListUrnks: false,
  // showList: true,
  // isLoading: false,
  // isUpdating: false,
  clearSortFilter: true,
  searchHistory: [],
  error: {},
  ...injects,
});

export const urnksReducer = (state = initialState(), action: Actions) => {
  switch (action.type) {
    // case ActionType.GET_MDMMS_START:
    //   return Object.assign({}, state, {
    //     showList: false,
    //     isLoading: true,
    //     error: '',
    //   });
    // case ActionType.GET_MDMMS_SUCCEED:
    //   return Object.assign({}, state, {
    //     ...action.payload.mdmms,
    //     showList: true,
    //     searchHistory: [
    //       action.payload.searchHistory,
    //       ...state.searchHistory,
    //     ].slice(0, 30),
    //     isLoading: false,
    //     error: '',
    //   });
    // case ActionType.GET_MDMMS_FAIL:
    //   return Object.assign({}, state, {
    //     // eslint-disable-next-line @typescript-eslint/camelcase
    //     cm_mdmms: {},
    //     showList: false,
    //     isLoading: false,
    //     error: action.payload.error,
    //   });

    case types.getUrnksStart:
      return Object.assign({}, state, {
        showListUrnks: false,
        isLoading: true,
        error: {},
      });
    case types.getUrnksSucceed:
      return Object.assign({}, state, {
        ...action.payload.urnks,
        // ...action.payload.mdmms,
        showListUrnks: true,
        searchHistory: [
          action.payload.searchHistory,
          ...state.searchHistory,
        ].slice(0, 30),
        isLoading: false,
        error: {},
      });
    case types.getUrnksFail:
      return Object.assign({}, state, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        cm_urnks: {},
        showListUrnks: false,
        isLoading: false,
        error: action.payload.error,
      });

    // case ActionType.ADD_MDMMS_START:
    //   return Object.assign({}, state, { isUpdating: true, error: '' });
    // case ActionType.ADD_MDMMS_SUCCEED:
    //   return Object.assign({}, state, {
    //     ...action.payload.mdmms,
    //     showList: true,
    //     isUpdating: false,
    //     clearSortFilter: true,
    //     error: '',
    //   });
    // case ActionType.ADD_MDMMS_FAIL:
    //   return Object.assign({}, state, {
    //     isUpdating: false,
    //     error: action.payload.error,
    //   });

    // case ActionType.DELETE_MDMMS_START:
    //   return Object.assign({}, state, { isUpdating: true, error: '' });
    // case ActionType.DELETE_MDMMS_SUCCEED:
    //   return Object.assign({}, state, {
    //     ...action.payload.mdmms,
    //     isUpdating: false,
    //     showList: true,
    //     clearSortFilter: false,
    //     error: '',
    //   });
    // case ActionType.DELETE_MDMMS_FAIL:
    //   return Object.assign({}, state, {
    //     isUpdating: false,
    //     showList: action.payload.error.status !== 404,
    //     error: action.payload.error,
    //   });
    // case ActionType.EDIT_MDMMS_START:
    //   return Object.assign({}, state, { isUpdating: true, error: '' });
    // case ActionType.EDIT_MDMMS_SUCCEED:
    //   return Object.assign({}, state, {
    //     ...action.payload.mdmms,
    //     isUpdating: false,
    //     clearSortFilter: false,
    //     error: '',
    //   });
    // case ActionType.EDIT_MDMMS_FAIL:
    //   return Object.assign({}, state, {
    //     isUpdating: false,
    //     error: action.payload.error,
    //   });

    default:
      return state;
  }
};

export default urnksReducer;
