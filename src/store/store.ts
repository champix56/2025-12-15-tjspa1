import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import currentReducer from "./current";

export const store = configureStore({
  reducer: { ressources: ressourcesReducer, current:currentReducer },
});

//type state et dispatch
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;


store.subscribe(() => {
  console.log(store.getState());
});
