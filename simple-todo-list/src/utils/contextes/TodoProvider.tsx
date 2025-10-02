import React from 'react';
import Todo from '../../interfaces/todoList';
import DEFAULT_TODO_LIST from '../../todoList.mock';
import { TodoContext } from './TodoContext';

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
    const [idIncr, setIdIncr] = React.useState(todos.length + 1);
    const [editTodoId, setEditTodoId] = React.useState<Todo['id'] | null>(null);

    interface Mode {
      filter: 'ALL' | 'ACTIVE' | 'DONE'
    }
    const [mode, setMode] = React.useState<Mode>({filter: 'ALL'});

    const addTodo = ({ title, description }: Omit<Todo, 'checked' | 'id'>) => {
      setTodos(previousTodo => [...previousTodo, {title, description, id: idIncr, checked: false}]);
      setIdIncr(prev => ++prev);
    };

    const deleteTodo = (id: Todo['id']) => {
      setTodos(prev => [...prev].filter(todo => todo.id !== id));
    };

    const selectTodoForId = (id: Todo['id']) => {
      if (todos.find(el => el.id === id)) {
        setEditTodoId(id);
      }
    };

    const editTodo = ({ title, description }: Omit<Todo, 'id' | 'checked'>): void => {
      setTodos(todos.map(todo => {
        if (todo.id === editTodoId) {
          return {...todo, title, description};
        }
        return todo;
      }));
      setEditTodoId(null);
    };

    const filterTodoList = (): Todo[] => {
      return mode.filter === 'ALL' ? todos : todos.filter(todo => todo.checked === (mode.filter === 'DONE'))
    };

    const todoChangedHandler = (todos: Todo[]) => {
        setTodos(todos);
    };

    const filterClickHandler = (filter: Mode['filter']) => {
        setMode({...mode, filter});
    };

    const value = React.useMemo(() => ({
        addTodo,
        deleteTodo,
        selectTodoForId,
        editTodo,
        filterTodoList,
        todoChangedHandler,
        filterClickHandler,
        setTodos,
        editTodoId,
        setEditTodoId,
        idIncr,
        setIdIncr,
        todosList: filterTodoList(),
        todosChangedHandler: todoChangedHandler,
        deleteHandler: deleteTodo,
        editClickHandler: selectTodoForId
    }), [
        addTodo, selectTodoForId, editTodo, filterTodoList,
        filterClickHandler, editTodoId, idIncr]);

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
};