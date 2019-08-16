import * as ActionType from '../actions/actionsConsMdmms'

const initialState = {
  cm_mdmms: [],
  showList: false,
  isLoading: false,
  isUpdating: false,
  clearSortFilter: true,
  searchHistory: [],
  error: '',
}

const mdmmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MDMMS_START:
      return (Object.assign({}, state, {showList: false, isLoading: false, error: ''}))
    case ActionType.GET_MDMMS_SUCCEED:
      return (Object.assign({}, state,
        {
          ...action.payload.mdmms,
          showList: true,
          searchHistory: [action.payload.searchHistory, ...state.searchHistory].slice(0,30),
          isLoading: true,
          error: '',
        }
      )
    )
    case ActionType.GET_MDMMS_FAIL:
      return (Object.assign({}, state, {cm_mdmms: [], showList: false, isLoading: false, error: action.payload.error}))

    case ActionType.ADD_MDMMS_START:
      return (Object.assign({}, state, {isUpdating: true, error: ''}))
    case ActionType.ADD_MDMMS_SUCCEED:
      return (Object.assign({}, state,
        {
          ...action.payload.mdmms,
          showList: true,
          isUpdating: false,
          clearSortFilter: true,
          error: '',
        }
      )
    )
    case ActionType.ADD_MDMMS_FAIL:
      return (Object.assign({}, state, {isUpdating: false, error: action.payload.error}))

    case ActionType.DELETE_MDMMS_START:
      return (Object.assign({}, state, {isUpdating: true, error: ''}))
    case ActionType.DELETE_MDMMS_SUCCEED:
      return (Object.assign({}, state,
        {
          ...action.payload.mdmms,
          isUpdating: false,
          showList: true,
          clearSortFilter: false,
          error: '',
        }
      )
    )
    case ActionType.DELETE_MDMMS_FAIL:
      return (Object.assign({}, state,
        {
          isUpdating: false,
          showList: action.payload.error.status===404 ? false : true,
          error: action.payload.error
        }
      )
    )
		case ActionType.EDIT_MDMMS_START:
			return (Object.assign({}, state, {isUpdating: true, error: ''}))
		case ActionType.EDIT_MDMMS_SUCCEED:
			return (Object.assign({}, state,
				{
					...action.payload.mdmms,
					isUpdating: false,
          clearSortFilter: false,
					error: '',
				}
			)
		)
		case ActionType.EDIT_MDMMS_FAIL:
			return (Object.assign({}, state, {isUpdating: false, error: action.payload.error}))

    default:
      return state
  }
}

export default mdmmsReducer