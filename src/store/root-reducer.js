import { combineReducers } from 'redux';
import { positionReducer } from './positions/positions-reducers';
import { filterReducer } from './filters/filters-reducers'

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
});