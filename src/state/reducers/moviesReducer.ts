import { Action } from "../actions/index"
import { ActionType } from "../action-types/index"

const initialState: MovieStore = {
  search: "",
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results:0
  }
}
const reducer = (state: any = initialState, action: Action) => {
  switch(action.type) {
    case ActionType.SEARCH_MOVIE:
      return {
        ...state,    
        search: action.payload
    };
    case ActionType.FETCH_MOVIES:
      return action.payload;
    case ActionType.FETCH_MOVIE:
        return action.payload;
    default:
      return state
  }
}

export default reducer
