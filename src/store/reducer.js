import { combineReducers } from 'redux';
import servicesReducer from './service';


// const servicesReducer = (serviceState = {services: [], isLoading: false, errMsg: null}, action) =>{
//     switch (action.type) {
//         case 'LOADING':
//             return {
//                 ...serviceState,
//                 isLoading: action.payload
//             }
//         case 'SERVICE':
//             return {
//                 ...serviceState,
//                 services: serviceState.services.concat(action.payload)
//             }
//         case 'MSG':
//             return {
//                 ...serviceState,
//                 errMsg: action.payload
//             }
//         default:
//             return serviceState
// }};


export const reducer = combineReducers({
    services: servicesReducer
})