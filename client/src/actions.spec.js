import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  actionTypes,
  VisibilityFilters,
} from './actions';

describe('action creators', () => {
  test('addTodo() should return an action to add a todo', () => {
    const text = 'Port Salut cheese';
    const type = actionTypes.ADD_TODO;
    const expectedAction = { type, text };
    expect(addTodo(text)).toEqual(expectedAction);
  });

  test('toggleTodo() should return an action to toggle a todo', () => {
    const index = 0;
    const type = actionTypes.TOGGLE_TODO;
    const expectedAction = { type, index };
    expect(toggleTodo(index)).toEqual(expectedAction);
  });

  describe('setVisibilityFilter()', () => {
    test('should return an action to set the filter', () => {
      const filter = VisibilityFilters.SHOW_COMPLETED;
      const type = actionTypes.SET_VISIBILITY_FILTER;
      const expectedAction = { type, filter };
      expect(setVisibilityFilter(filter)).toEqual(expectedAction);
    });

    test('should throw on invalid filter', () => {
      const filter = 'fails';
      const shouldThrow = () => setVisibilityFilter(filter);
      const expectedErrorMessage = 'Invalid visibility filter';
      expect(shouldThrow).toThrowError(expectedErrorMessage);
    });
  });

});
