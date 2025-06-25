// Cerveau de l'application Redux
// Responsable de la création de la création et de la configuration du store Redux

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Importation du reducer

const store = configureStore({
  reducer: {
    // Reducer racine qui combine les autres reducers
    todos: todoReducer,
  },
});

export default store;
