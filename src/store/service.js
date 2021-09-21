import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiActionTypes';


const slice = createSlice({
    name: 'service',
    initialState:{
        list: [],
        loading: false,
        successMsg: null,
        errorMsg: null
    },
    reducers: {
        serviceLoading: (service, action) =>{
            service.loading = action.payload
        },
        serviceRequested: (service, action) =>{
            service.list.push(action.payload)
        }
    }
})

export const { serviceLoading, serviceRequested } = slice.actions
export default slice.reducer;

// action creators

const url = '/services'
export const loadServices = ()=>
    apiCallBegan({
        url: url,
        onSuccess: serviceRequested.type
    })


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// // action
// export const serviceRequest = createAction('serviceRequest');
// export const serviceLoading = createAction('serviceLoading');
// console.log(serviceLoading());  // {type: 'serviceLoading', payload: undefined}
// console.log(serviceLoading(true));  // {type: 'serviceLoading', payload: true}

// // reducer
// export default createReducer({list:[],loading:false},{
//     [serviceRequest.type]: (service, action)=>{
//         service.list.push(action.payload);
//     },
//     [serviceLoading.type]: (service, action)=>{
//         service.loading = action.payload;
//     },
// })
