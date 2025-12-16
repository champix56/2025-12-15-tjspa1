import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import { loadRessources } from "./asyncCaller";
import currentReducer from "./current";

export const store = configureStore({ reducer: { ressources: ressourcesReducer, current: currentReducer } });
store.subscribe(() => console.log(store.getState()))
store.dispatch(loadRessources());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;