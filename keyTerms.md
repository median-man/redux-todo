# Key Terms
This is a list of key terms to help reinforce the vocabulary and concepts I've learned while working with Redux.

**Action**:  
A plain JavaScript object describing what happened&mdash;e.g. `{ type: 'ADD', text: 'Red Windsor' }`.

**Reducer**:  
A function which returns the next state given state and an action. Reducers specify how the state
changes in response to an action sent the store.

```javascript
function cheeses(state = [], action) {
  if (action.type === 'ADD') {
    return state.concat(action.text);
  }
  return state;
}
```

**Pure Function**:  
A function which, given the same input, will always return the same output and produces no
side effects. *Reducers should always be pure functions.*

**Three principles**:  
Redux may be described with three principles: "single source of truth", read-only state, and change
via pure functions. (see [Three Principles][redux-3])

**Flux**:  
Flux is an architecture for the flow of data in client-side web apps used by Facebook.
([Flux Overview][flux]) Redux was inspired by Flux and bears some similarities. Unlike Flux, there
is no dispatcher&mdash;pure functions are used instead. With Redux, data is never mutated.

**Immutable**:  
Every level of nesting must be copied in an update because arrays and objects are assigned by
reference in JavaScript. In my opinion, keeping the data for state in shallow structures is key to
avoiding bugs. Normalize!

[Immutable Update Patterns][redux-update-patterns] on redux.js.org goes into greater detail on the
subject of avoiding mutations and offers some recipes.

[Immutable][immutable] is a JavaScript library that may be used with Redux. Immutable provides an API for
manipulating data structures without mutation.

**Action Creator**:<br>
Function which returns an action.

**Store**:<br>
The object which is created by passing a reducer to createStore(). Methods include getState(),
dispatch(), and subscribe().

**Reducer Composition**:<br>
There should be only one store in a Redux application. In order to split data handling, split up reducers into separate reducer functions which each accept an independent element of state and an action and return the new part of the state. The *combineReducers* is a utility method exported by Redux which accepts reducer functions and returns a single reducer for the entire store. (See [*combineReducers*][redux-combineReducers] from the API Reference.)

**Root Reducer**:<br>
The root reducer is the top level reducer function that is passed to the createStore method and is responsible for updating the entire state tree. The root reducer is called every time an action is dispatched. The root reducer can be a custom reducer function for updating state or may be created by composing reducers using *combineReducers*.

**More terms**: Flow


[redux-3]: https://redux.js.org/introduction/threeprinciples
[redux-update-patterns]: https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns
[redux-combineReducers]: https://redux.js.org/api/combinereducers
[flux]: https://facebook.github.io/flux/docs/in-depth-overview.html#content
[immutable]: https://facebook.github.io/immutable-js/
