import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import currentReducer from "./current";
import { fetchDatas } from "./asyncCaller";

export const store = configureStore({
  reducer: { ressources: ressourcesReducer, current: currentReducer },
});

//type state et dispatch
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
store.dispatch(fetchDatas());

store.subscribe(() => {
  console.log(store.getState());
});
