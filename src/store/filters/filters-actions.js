export const ADD_FILTER = 'ADD_FILTER';
export const CLOSE_FILTER = 'CLOSE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const addFilter = (filter) => {
    return {
        type: ADD_FILTER,
        filter,
    };
};

export const closeFilter = (filter) => {
    return {
        type: CLOSE_FILTER,
        filter,
    };
};

export const clearFilters = {
    type: CLEAR_FILTERS,
};