import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  TOGGLE_TODO,
} from './actions';

const updateState = (state, update) => Object.assign({}, state, update);

const addTodo = (state, { text }) => {
  const newTodo = {
    completed: false,
    text,
  };
  const todos = [...state.todos, newTodo];
  return Object.assign({}, state, { todos });
};

const toggleTodo = (state, { index }) => {
  const targetTodo = state.todos[index];
  const completed = !targetTodo.completed;
  const toggledTodo = Object.assign({}, targetTodo, { completed });
  const todos = state.todos.map((todo, i) => i === index ? toggledTodo : todo);
  return Object.assign({}, state, { todos });
};

const setVisFilter = (state, action) => {
  return Object.assign(
    {},
    state,
    { visibilityFilter: action.filter },
  );
};

const handlers = {
  [ADD_TODO]: addTodo,
  [TOGGLE_TODO]: toggleTodo,
  [SET_VISIBILITY_FILTER]: setVisFilter,
};

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

export function todoApp(state = initialState, action = {}) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
