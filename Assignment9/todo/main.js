

// document.querySelector('#app').innerHTML = `
// <input type="text" placeholder="ADD TODO" id="addtodo">
// <button id="add">ADD</button>
// `

import {legacy_createStore} from 'redux';
const ADD_TODO = "ADD_TODO";
const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...store, todos:[...store.todos , action.payload] };
      case "TOGGLE_TODO":return {...store,status:store.status===false?true:false}
    default:
      return { ...store };
  }
};
const initial = {
  todos: [],
};

const store = legacy_createStore(reducer,initial);
console.log(store.getState());
const addtodos = (title, status) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      status: status,
    },
  };
};

const togglestatus = (status)=>{
  return {
    type :"TOGGLE_TODO",
    payload : {
       status : status,
    }

  }
}


  store.dispatch(addtodos("Leaarn js", false));
 
  console.log(store.getState());
  store.dispatch(togglestatus(true))
  console.log(store.getState());
  store.dispatch(togglestatus(false))
  console.log(store.getState());

