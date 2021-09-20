// store, next, action

const customLogger = store => next => action =>{
    console.log('store ', store.getState());
    console.log('next ', next);
    console.log('action ', action);
    next(action);
}

export default customLogger;