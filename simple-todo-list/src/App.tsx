import React from 'react';

import Header from './components/Header';

import DEFAULT_TODO_LIST from './todoList.mock';

import styles from './App.module.css';
import Panel from './components/Panel';
import Todo from './interfaces/todoList';
import TodoList from './components/TodoList/TodoList';


const App: React.FC = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length}/>
        <Panel addTodo={(todo: Todo) => {
          setTodos(previousTodo => [...previousTodo, todo]);
          }}/>
        <TodoList todosList={todos} todoChangedHandler={()} />
      </div>
    </div>
  );
}

export default App;