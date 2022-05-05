import {combineReducers, legacy_createStore as 
  createStore} from "redux";

import {navReduser} from "./reduser"

const rootReduser=combineReducers({
  isshow:navReduser,
})


export const store=createStore(navReduser,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
;
// console.log(store.getdata);

// store.subscribe(()=>{
//     console.log(store.getState())
// })
