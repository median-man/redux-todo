import { todoApp } from './reducers';

describe('reducers', () => {
  describe('todoApp()', () => {
    const initialState = {
      visibilityFilter: 'SHOW_ALL',
      todos: [],
    };

    test('should return initial state when state is undefined', () => {
      expect(todoApp()).toEqual(initialState);
    });

    test('should return state unchanged when it is defined', () => {
      const state = { cheese: 'Emmental' };
      expect(todoApp(state)).toBe(state);
    });

    test('should change state.visibilityFilter when the action is SET_VISIBILITY_FILTER', () => {
      const state = initialState;
      const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      };

      const expectedState = {
        visibilityFilter: action.filter,
        todos: state.todos,
      };

      expect(todoApp(state, action)).toEqual(expectedState);
    },
    );

    test('should add new todo object to state.todos when action is ADD_TODO', () => {
      const state = initialState;
      const action = {
        type: 'ADD_TODO',
        text: 'Caerphilly cheese',
      };

      const expected = {
        visibilityFilter: state.visibilityFilter,
        todos: [{ text: action.text, completed: false }],
      };

      expect(todoApp(state, action)).toEqual(expected);
    });

    test('should toggle todo.completed when action is TOGGLE_TODO', () => {
      const todo = { completed: false, text: 'Tilsit cheese' };
      const state = {
        visibilityFilter: 'SHOW_ALL',
        todos: [todo],
      };
      const action = {
        type: 'TOGGLE_TODO',
        index: 0,
      };
      const expected = {
        completed: true,
        text: 'Tilsit cheese',
      };

      const actual = todoApp(state, action);
      expect(actual).not.toBe(state);
      expect(actual.todos[0]).not.toBe(state.todos[0]);
      expect(todoApp(state, action).todos[0]).toEqual(expected);
    });
  });
});
