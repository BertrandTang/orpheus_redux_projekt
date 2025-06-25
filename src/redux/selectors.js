// Fonctions qui permettent d'extraire des parties spécifiques des états de l'application

import { createSelector } from 'reselect';

// Extrait toutes les todos
export const selectTodos = (state) => state.todos;
// Extrait seulement les todos dites "complétées"
export const selectCompletedTodos = createSelector(
[selectTodos],
(todos) => todos.filter(todo => todo.completed)
);