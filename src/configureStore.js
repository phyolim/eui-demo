import { createStore } from "redux";
import createReducer from "./reducers";

export default function configureStore(initialState = null) {
  return createStore(
    createReducer(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
