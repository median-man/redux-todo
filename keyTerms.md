# Key Terms
This is a list of key terms to help reinforce the vocabulary and concepts I've learned while working
with Redux.

**Action**:  
A plain JavaScript object describing what happened&mdash;e.g. `{ type: 'ADD', text: 'Red Windsor' }`.

**Reducer**:  
A function which returns the next state given state and an action.

```javascript
function cheeses(state = [], action) {
  if (action.type === 'ADD') {
    return state.concat(action.text);
  }
  return state;
}
```

**Three principles**:  
Redux may be described with three principles: "single source of truth", read-only state, and change
via pure functions. (see [Three Principles][redux-3])

**Flux**:  
Flux is an architecture for the flow of data in client-side web apps used by Facebook.
([Flux Overview][flux]) Redux was inspired by Flux and bears some similarities. Unlike Flux, there
is no dispatcher&mdash;pure functions are used instead. With Redux, data is never mutated.

**Immutable**:  
[Immutable][immutable] is a JavaScript library that may be used with Redux. Immutable provides an API for
manipulating data structures without mutation.

**Action Creator**:  
Function which returns an action.

[redux-3]: https://redux.js.org/introduction/threeprinciples
[flux]: https://facebook.github.io/flux/docs/in-depth-overview.html#content
[immutable]: https://facebook.github.io/immutable-js/
