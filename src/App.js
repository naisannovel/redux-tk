import React, { useEffect } from "react";
import configureStore from "./store/configureStore";
import { serviceRequest, serviceLoading } from './store/service';

const store = configureStore();

function App() {

  useEffect(()=>{
    store.dispatch(serviceLoading(true))
    store.dispatch(serviceRequest({id:1}))
    store.dispatch(serviceRequest({id:2}))
    store.dispatch(serviceRequest({id:3}))
    store.dispatch(serviceLoading(false))
  },[])


  // store().dispatch(serviceRequestedFailed('error failed'));
  // store().dispatch(serviceRequested(false));
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
