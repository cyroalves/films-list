import { ActionType } from "../action-types/index"

interface SearchAction {
  type: ActionType.SEARCH_MOVIE
  payload: string
}
interface FetchAction {
  type: ActionType.FETCH_MOVIES
  payload: MovieAction
}

interface FetchMovieAction {
  type: ActionType.FETCH_MOVIE
  payload: MovieAction
}


export type Action = SearchAction | FetchAction | FetchMovieAction
