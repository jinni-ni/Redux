import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELTE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];

    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

//store 에서 li state를 관리할 수 있도록 한다.
// connect : components를 store 연결

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
