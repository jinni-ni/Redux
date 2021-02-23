import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log("text :", action.text);
  console.log("action: ", action);
  switch (action.type) {
    case ADD_TODO:
      // push 하는 것을 mutation 이라고 하는데,
      // 절대 사용 하면 안됨. state spread 후 추가
      // return state.push(action.texxt)

      return [...state, { text: action.text, id: Date.now() }];
    // return [...state, {text:action.text}]
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
  // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
