import { createStore, applyMiddleware, Store, Action } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from "./reducers/index"
import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit";

const middleware = [thunk];

export const store: Store<any, Action> & {
  dispatch: DispatchType
}= createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

/* export const store: Store<any, Action> & {
  dispatch: DispatchType
} = configureStore({
  reducer: {
    movies: reducers,
  },
}); */