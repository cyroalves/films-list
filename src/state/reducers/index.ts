import { combineReducers } from "redux"
import moviesReducer from './moviesReducer'

const reducers = combineReducers({
  //bank: bankReducer
  moviesStore: moviesReducer
})

export default reducers
export type State = ReturnType<typeof reducers>
