import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addMeme, removeMeme } from "./ressources";

const store = configureStore({ reducer: { ressources: ressourcesReducer } });
store.subscribe(() => console.log(store.getState()))
store.dispatch(addMeme({ id: 0, name: 'coucou' }))
store.dispatch(addMeme({ id: 1, name: 'toto' }))
store.dispatch(addMeme({ id: 2, name: 'hello' }))
store.dispatch(addMeme({ id: 3, name: 'ola' }))
store.dispatch(removeMeme({ id: 1, name: 'toto' }))