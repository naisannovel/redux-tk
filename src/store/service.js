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
        serviceRequested: (service, action) =>{
            service.loading = true
        },
        serviceReceived: (service, action) =>{
            service.loading = false
            service.list.push(action.payload)
        },
        serviceRequestFailed: (service, action) =>{
            service.loading = false
            service.errorMsg = action.payload
        }
    }
})

export const { serviceRequested, serviceReceived, serviceRequestFailed } = slice.actions
export default slice.reducer;

// action creators

const url = '/services'
export const loadServices = ()=>
    apiCallBegan({
        url: url,
        onStart: serviceRequested.type,
        onSuccess: serviceReceived.type,
        onError: serviceRequestFailed.type
    })


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// // action
// export const serviceReceived = createAction('serviceReceived');
// export const serviceRequested = createAction('serviceRequested');
// console.log(serviceRequested());  // {type: 'serviceRequested', payload: undefined}
// console.log(serviceRequested(true));  // {type: 'serviceRequested', payload: true}

// // reducer
// export default createReducer({list:[],loading:false},{
//     [serviceReceived.type]: (service, action)=>{
//         service.list.push(action.payload);
//     },
//     [serviceRequested.type]: (service, action)=>{
//         service.loading = action.payload;
//     },
// })
