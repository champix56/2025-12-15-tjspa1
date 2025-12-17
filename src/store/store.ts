import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import currentReducer from "./current";

export const store = configureStore({
  reducer: { ressources: ressourcesReducer, current:currentReducer },
});
store.subscribe(() => {
  console.log(store.getState());
});
