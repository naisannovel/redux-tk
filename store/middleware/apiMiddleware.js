import axios from "axios";
import * as actions from '../apiActionTypes';

const apiMiddleware = ({ dispatch }) => next => async action =>{
    if(action.type !== actions.apiCallBegan.type) return next(action);



    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    dispatch({ type: onStart })
    next(action);

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:9001/api',
            url,
            method,
            data
        })

        // General
        // dispatch(actions.apiCallSuccess(response.data));
        // Specific
        if(onSuccess) dispatch({ type: onSuccess, payload: response.data })

    }catch(error){

        // General
        // dispatch(actions.apiCallFailed(error.message));
        // Specific
        if(onError) dispatch({ type: onError, payload: error.message })
        
    }
}

export default apiMiddleware;


// const action = {
//     type: 'apiCallBegan',
//     payload:{
//         url:'/services',
//         method: 'get',
//         data: {},
//         onSuccess: 'servicesReceived',
//         onError: 'servicesRequestedFailed'
//     }
// }