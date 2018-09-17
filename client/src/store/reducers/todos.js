import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions';

export default function todos(state = [], action = {}) {
  switch (action.type) {

  case ADD_TODO:
    return addTodo(state, action.text);

  case TOGGLE_TODO:
    return toggleTodo(state, action.index);

  default:
    return state;
  }
}

function addTodo(state, text) {
  const newTodo = {
    completed: false,
    text,
  };
  return [...state, newTodo];
}

function toggleTodo(state, index) {
  const targetTodo = state[index];
  const completed = !targetTodo.completed;
  const toggledTodo = Object.assign({}, targetTodo, { completed });
  return state.map((todo, i) => i === index ? toggledTodo : todo);
}
