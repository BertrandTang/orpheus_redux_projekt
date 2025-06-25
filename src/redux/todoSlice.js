// Centralise la logique métier, ici la gestion des tâches
import { produce } from "immer";

const initialState = [];

// Convention de nommage du type d'action
const ADD_TODO = "todos/addTodo";
const TOGGLE_TODO = "todos/toggleTodo";

const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, (draft) => {
        draft.push({
          id: Date.now(),
          text: action.payload,
          completed: false,
        });
      });
    case TOGGLE_TODO:
      return produce(state, (draft) => {
        // On va cherche l'élément dont l'id ===
        const todo = draft.find((element) => element.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      });
    default:
      return state;
  }
};

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export default todoSlice;
