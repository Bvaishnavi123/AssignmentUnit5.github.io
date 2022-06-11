import {createState} from 'redux';
// const ADD_TODO = "ADD_TODO";
// const reducer = (store, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return { ...store, todos:[...store.todos , action.payload] };
//     default:
//       return { ...store };
//   }
// };
// const initial = {
//   todos: [],
// };

// const store = createState(reducer,initial);
// console.log(store.getState());
// const addtodos = (title, status) => {
//   return {
//     type: ADD_TODO,
//     payload: {
//       title: title,
//       status: status,
//     },
//   };
// };

document.getElementById("add").addEventListener("click", function () {
  //console.log("hii");
  const todo = document.getElementById("addtodo").value;
  // store.dispatch(addtodos(todo, false));
  //console.log(store.getState());
});


