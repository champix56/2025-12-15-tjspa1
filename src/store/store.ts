import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import { loadRessources } from "./asyncCaller";

const store = configureStore({ reducer: { ressources: ressourcesReducer } });
store.subscribe(() => console.log(store.getState()))
store.dispatch(loadRessources());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;