import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchField: ""
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.payload) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}