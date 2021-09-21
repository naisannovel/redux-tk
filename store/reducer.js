import { combineReducers } from 'redux';
import servicesReducer from './service';

export const reducer = combineReducers({
    services: servicesReducer
})