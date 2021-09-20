import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import customLogger from './middleware/loggerCustomMiddleware';
import customThunk from './middleware/thunkCustomMiddleware';


const store = ()=>{
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customLogger)   // customThunk
    })
}

export default store;
