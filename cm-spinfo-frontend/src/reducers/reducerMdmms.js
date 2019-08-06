import * as ActionType from '../actions/actionsConsMdmms'

const initialState = {
  mdmms: [],
  isLoading: false,
  isUpdating: false,
  searchHistory: [],
  error: ''
}

const mdmmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MDMMS_START:
      return (Object.assign({}, state, {isLoading: true, error: ''}))
    case ActionType.GET_MDMMS_SUCCEED:
      return (Object.assign({}, state,
        {
          mdmms: action.payload.mdmms,
          searchHistory: [action.payload.searchHistory, ...state.searchHistory].slice(0,30),
          isLoading: false,
          error: '',
        }
      )
    )
    case ActionType.GET_MDMMS_FAIL:
      return (Object.assign({}, state, {isLoading: false, error: action.payload.error}))


    case ActionType.ADD_MDMMS_START:
      return (Object.assign({}, state, {isUpdating: true, error: ''}))
    case ActionType.ADD_MDMMS_SUCCEED:
      return (Object.assign({}, state,
        {
          isUpdating: false,
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
					mdmms: action.payload.mdmms,
          isUpdating: false,
          error: '',
        }
      )
    )
    case ActionType.DELETE_MDMMS_FAIL:
      return (Object.assign({}, state, {isUpdating: false, error: action.payload.error}))


		case ActionType.EDIT_MDMMS_START:
			return (Object.assign({}, state, {isUpdating: true, error: ''}))
		case ActionType.EDIT_MDMMS_SUCCEED:
			return (Object.assign({}, state,
				{
					mdmms: action.payload.mdmms,
					isUpdating: false,
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