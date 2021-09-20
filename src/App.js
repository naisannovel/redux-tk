import React, { useEffect } from "react";
import configureStore from "./store/configureStore";
import { serviceRequest, serviceLoading } from './store/service';

const store = configureStore();

function App() {

  useEffect(()=>{
    store.dispatch(serviceLoading(true))
    store.dispatch(serviceRequest({name:'Internal Transmission Repair'}))
    store.dispatch(serviceRequest({name:'Wheel Alignment Special'}))
    store.dispatch(serviceRequest({name:'Brake Fluid Flush Service'}))
    store.dispatch(serviceLoading(false))
  },[])

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
