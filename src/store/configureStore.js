import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import customLogger from './middleware/loggerCustomMiddleware';
import customThunk from './middleware/thunkCustomMiddleware';
import api from './middleware/api';


const store = ()=>{
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api)   // customThunk, customLogger
    })
}

export default store;
