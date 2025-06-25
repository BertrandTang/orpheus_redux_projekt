// Centralise la logique métier, ici la gestion des tâches

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Action pour ajouter une tâche
    addTodo: (state, action) => {
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    },
    // Action pour marquer une tâche comme terminée
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
