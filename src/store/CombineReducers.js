import { combineReducers } from "redux";
import allCases from "./reducers/allCases";
import adminAccount from "./reducers/adminAccount";

export default combineReducers({
    allCases,
    adminAccount,
});
