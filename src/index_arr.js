import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  console.log("text :", action.text);
  console.log("action: ", action);
  switch (action.type) {
    case ADD_TODO:
      // push 하는 것을 mutation 이라고 하는데,
      // 절대 사용 하면 안됨. state spread 후 추가
      // return state.push(action.texxt)

      return [{ text: action.text, id: Date.now() }, ...state];
    // return [...state, {text:action.text}]
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchaddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchdeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
  // store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerText = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchdeleteToDo);
    btn.innerText = "DEL";
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};
store.subscribe(paintToDos);

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchaddToDo(toDo);
  // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
