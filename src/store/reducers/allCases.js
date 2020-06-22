import actions from "../actions";

export default function allCases(allCases = {}, action) {
    let newAllCases = { ...allCases };
    switch (action.type) {
        case actions.STORE_ALL_CASES:
            newAllCases = actions.payload;
            return newAllCases;
        default:
            return currentUser;
    }
}
