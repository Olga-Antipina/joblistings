import { ADD_FILTER, CLOSE_FILTER, CLEAR_FILTERS } from './filters-actions'

export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            return state.includes(action.filter) ? state : [...state, action.filter];
        case CLOSE_FILTER:
            return state.filter((fil) => fil !== action.filter);
        case CLEAR_FILTERS:
            return [];
        default:
            return state;
    }
}