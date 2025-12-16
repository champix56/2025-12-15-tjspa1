import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  memes: []
}
const reducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);

  switch (type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, payload] }
    case "REMOVE_MEME":
      const position = state.memes.findIndex(m => m.id === payload.id)
      if (position < 0) return state;
      return { ...state, memes: [...state.memes.slice(0, position), ...state.memes.slice(position + 1)] }
    default:
      return state
  }
}

const addMeme = (meme) => {
  return { type: 'ADD_MEME', payload: meme }
}
const removeMeme = (meme) => {
  return { type: 'REMOVE_MEME', payload: meme }
}

const store = configureStore({ reducer: reducer });
store.subscribe(() => console.log(store.getState()))

store.dispatch(addMeme({ id: 0, name: 'coucou' }))
store.dispatch(addMeme({ id: 1, name: 'toto' }))
store.dispatch(addMeme({ id: 2, name: 'hello' }))
store.dispatch(addMeme({ id: 3, name: 'ola' }))
store.dispatch(removeMeme({ id: 1, name: 'toto' }))