
const initialState = {
  memes: []
}
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, payload] }
    case "REMOVE_MEME":
      const position = state.memes.findIndex(m => m.id === payload.id)
      if (position < 0) return state;
      return { ...state, memes: [...state.memes.slice(0, position, ...state.memes.slice(position + 1)] }
    default:
      return state
  }
}
let state = reducer(undefined, { type: '@@INIT' });
console.log(state);
state = reducer(state, { type: 'ADD_MEME', payload: { id: 0, name: 'coucou' } });
console.log(state);
state = reducer(state, { type: 'ADD_MEME', payload: { id: 1, name: 'toto' } });
console.log(state);
state = reducer(state, { type: 'ADD_MEME', payload: { id: 2, name: 'hello' } });
console.log(state);
state = reducer(state, { type: 'ADD_MEME', payload: { id: 3, name: 'ola' } });
console.log(state);
state = reducer(state, { type: 'REMOVE_MEME', payload: { id: 1, name: 'toto' } });
console.log(state);