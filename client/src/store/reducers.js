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
  return [...state, newTodo];
};

const toggleTodo = (state, { index }) => {
  const targetTodo = state[index];
  const completed = !targetTodo.completed;
  const toggledTodo = Object.assign({}, targetTodo, { completed });
  return state.map((todo, i) => i === index ? toggledTodo : todo);
};

const todos = (state, action) => {
  const { todos } = state;
  const nextState = (todos) => Object.assign({}, state, { todos });
  if (action.type === ADD_TODO) {
    return nextState(addTodo(todos, action));
  }
  if (action.type === TOGGLE_TODO) {
    return nextState(toggleTodo(todos, action));
  }
};

const setVisFilter = (state, action) => {
  return Object.assign(
    {},
    state,
    { visibilityFilter: action.filter },
  );
};

const todoAppHandlers = {
  [ADD_TODO]: todos,
  [TOGGLE_TODO]: todos,
  [SET_VISIBILITY_FILTER]: setVisFilter,
};

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

export function todoApp(state = initialState, action = {}) {
  const handler = todoAppHandlers[action.type];
  return handler ? handler(state, action) : state;
}
