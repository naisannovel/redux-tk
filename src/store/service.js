import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// action
export const serviceRequest = createAction('serviceRequest');
export const serviceLoading = createAction('serviceLoading');
console.log(serviceLoading());  // {type: 'serviceLoading', payload: undefined}
console.log(serviceLoading(true));  // {type: 'serviceLoading', payload: true}

// reducer
export default createReducer({list:[],loading:false},{
    [serviceRequest.type]: (service, action)=>{
        service.list.push(action.payload);
    },
    [serviceLoading.type]: (service, action)=>{
        service.loading = action.payload;
    },
})

// const slice = createSlice({
//     name: 'service',
//     initialState:{
//         list: [],
//         loading: false,
//         successMsg: null,
//         errorMsg: null
//     },
//     reducers: {
//         serviceRequested: (service, action) =>{
//             service.loading = action.payload
//         },
//         serviceRequestedFailed: (service, action) =>{
//             service.errorMsg = action.payload
//         }
//     }
// })

// export const { serviceRequested, serviceRequestedFailed } = slice.actions
// export default slice.reducer;