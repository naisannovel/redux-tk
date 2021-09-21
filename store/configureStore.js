import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import customLogger from './middleware/loggerCustomMiddleware';
import customThunk from './middleware/thunkCustomMiddleware';
import apiMiddleware from './middleware/apiMiddleware';


const store = ()=>{
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)   // customThunk, customLogger
    })
}

export default store;
