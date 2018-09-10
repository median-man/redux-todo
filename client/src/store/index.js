import { createStore } from 'redux';
import * as actions from './actions';
import { todoApp } from './reducers';

export default createStore(todoApp);
export { actions };
