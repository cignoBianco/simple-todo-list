import React from 'react';
import Todo from '../../interfaces/todoList';
import { Mode } from './TodoProvider';

export interface TodoContextProps {
    todosList: Todo[];
    mode: Mode;
    todosChangedHandler: (todos: Todo[]) => void;
    deleteHandler: (id: Todo['id']) => void;
    editClickHandler: (id: Todo['id']) => void;
    editTodoId: Todo['id'] | null;
    editTodo: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
    addTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
    todosList: [],
    mode: {filter: 'ALL'},
    todosChangedHandler: () => {},
    deleteHandler: () => {},
    editClickHandler: () => {},
    editTodoId: null,
    editTodo: () => {},
    addTodo:  () => {},
});
