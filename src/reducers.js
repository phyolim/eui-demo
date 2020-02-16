import { combineReducers } from "redux";
import homePageReducer from "./Containers/HomePage/reducer";

export default function createReducer() {
  return combineReducers({
    homePage: homePageReducer
  });
}
