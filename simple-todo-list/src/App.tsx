import React from 'react';

import Header from './components/Header';

import DEFAULT_TODO_LIST from './todoList.mock';

import styles from './App.module.css';
import Panel from './components/Panel';
import Todo from './interfaces/todoList';
import TodoList from './components/TodoList/TodoList';
import Button from './components/Button';
import FilterButtonsPanel from './components/FilterButtonsPanel/FilterButtonsPanel';


const App: React.FC = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [idIncr, setIdIncr] = React.useState(todos.length + 1);

  interface Mode {
    filter: 'ALL' | 'ACTIVE' | 'DONE'
  }
  const [mode, setMode] = React.useState<Mode>({filter: 'ALL'});

  const addTodo = ({ title, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos(previousTodo => [...previousTodo, {title, description, id: idIncr, checked: false}]);
    setIdIncr(prev => ++prev);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => [...prev].filter(todo => todo.id !== id));
  };

  const filterTodoList = (): Todo[] => {
    return mode.filter === 'ALL' ? todos : todos.filter(todo => todo.checked === (mode.filter === 'DONE'))
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCount={todos.length}/>
        {idIncr}
        <Panel addTodo={addTodo}/>
        <FilterButtonsPanel currentMode={mode.filter} onClickHandler={(filter) => {setMode({...mode, filter})}}/>
        <TodoList
          todosList={filterTodoList()}
          todosChangedHandler={(todos) => {
            setTodos(todos);
          }}
          deleteHandler={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;