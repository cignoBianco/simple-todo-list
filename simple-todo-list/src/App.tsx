import React from 'react';

import Header from './components/Header';
import Panel from './components/Panel';
import Todo from './interfaces/todoList';
import TodoList from './components/TodoList/TodoList';
import FilterButtonsPanel from './components/FilterButtonsPanel/FilterButtonsPanel';

import DEFAULT_TODO_LIST from './todoList.mock';

import styles from './App.module.css';


const App: React.FC = () => {
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

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length}/>
        <Panel mode='add' addTodo={addTodo}/>
        <FilterButtonsPanel currentMode={mode.filter} onClickHandler={(filter) => {setMode({...mode, filter})}}/>
        <TodoList
          todosList={filterTodoList()}
          todosChangedHandler={(todos) => {
            setTodos(todos);
          } }
          deleteHandler={deleteTodo}
          editClickHandler={selectTodoForId}
          editTodoId={editTodoId}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;