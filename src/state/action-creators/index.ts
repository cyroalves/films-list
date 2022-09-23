import { ActionType } from "../action-types"
import { Dispatch }  from "redux"
import { Action } from "../actions/index"
import axios from "axios"

export const searchMovie = (movie: string) => {  
  console.log("teste")
  return (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SEARCH_MOVIE,
    payload: movie
  });
}
};

export const fetchMovies = (text: string) => {

  const searchWithQueryURL = `${process.env.REACT_APP_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`
  return (dispatch: Dispatch<Action>) => {
  axios
  .get(searchWithQueryURL)
  .then(response =>
    dispatch({
      type: ActionType.FETCH_MOVIES,
      payload: response.data
    })
  )
  .catch(err => console.log(err));
}
};

export const fetchMovie = (text: string) => {
  const searchWithQueryURL = `${process.env.REACT_APP_API}${text}?api_key=${process.env.REACT_APP_API_KEY}`;
  return (dispatch: Dispatch<Action>) => {
  axios
  .get(searchWithQueryURL)
  .then(response =>
    dispatch({
      type: ActionType.FETCH_MOVIE,
      payload: response.data
    })
  )
  .catch(err => console.log(err));
}
};

export const getAllMovies = (state: any) => state.moviesStore;

