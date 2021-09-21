import React, { useEffect } from "react";
import configureStore from "./store/configureStore";
import { serviceRequested, serviceLoading } from './store/service';
import { loadServices } from "./store/service";

const store = configureStore();

function App() {

  useEffect(()=>{
    // store.dispatch(serviceLoading(true))
    // store.dispatch(serviceRequested({name:'Internal Transmission Repair'}))
    // store.dispatch(serviceRequested({name:'Wheel Alignment Special'}))
    // store.dispatch(serviceRequested({name:'Brake Fluid Flush Service'}))
    // store.dispatch(serviceLoading(false))



    store.dispatch(loadServices());


  },[])

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;



//     type: 'apiCallBegan',
//     payload:{
//         url:'/services',
//         method: 'get',
//         data: {},
//         onSuccess: 'servicesReceived',
//         onError: 'servicesRequestedFailed'
//     }