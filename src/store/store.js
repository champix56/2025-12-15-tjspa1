import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addMeme, removeMeme } from "./ressources";
import { loadImages } from "./asyncCaller";

const store = configureStore({ reducer: { ressources: ressourcesReducer } });
store.subscribe(() => console.log(store.getState()))
store.dispatch(loadImages());