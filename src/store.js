import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELTE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     //case ADD:
//     case addToDo.type:
//       // return [{text: text}]
//       return [{ text: action.payload, id: Date.now() }, ...state];

//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     // mutate state
//     state.push({ text: action.payload, id: Date.now() });
//   },

//   [deleteToDo]: (state, action) =>
//     // 새로운 state를 return
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },

    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

//store 에서 li state를 관리할 수 있도록 한다.
// connect : components를 store 연결

console.log(toDos.reducer);

export const { add, remove } = toDos.actions;

export default store;
