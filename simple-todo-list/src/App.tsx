import React from 'react';

import Header from './components/Header';

import DEFAULT_TODO_LIST from './todoList.mock';

import styles from './App.module.css';
import Panel from './components/Panel';
import Todo from './interfaces/todoList';
import TodoList from './components/TodoList/TodoList';


const App: React.FC = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [idIncr, setIdIncr] = React.useState(todos.length + 1);

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length}/>
        <Panel addTodo={(todo: Todo) => {
          setTodos(previousTodo => [...previousTodo, {...todo, id: idIncr}]);
          setIdIncr(prev => prev++);
          }}/>
        <TodoList todosList={todos} todosChangedHandler={(todos) => {
          setTodos(todos);
        }} />
      </div>
    </div>
  );
}

export default App;