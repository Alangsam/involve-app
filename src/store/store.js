import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./combineReducers";

const initialState = {
    allCases: [],
    AdminAccount: {},
};

const store = createStore(combineReducer, initialState, composeWithDevTools());

export default store;
