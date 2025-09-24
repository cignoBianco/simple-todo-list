import React, { useState } from 'react';
import Todo from '../../interfaces/todoList';
import TodoItem from '../TodoItem';


interface TodoListProps {
    todosList: Todo[];
    todoChangedHandler: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({todosList}) => {
    const [todos, setTodos] = useState<Todo[]>(todosList);

    return <div>
        <h2>Todos:</h2>
        {todos.map(todo => <TodoItem todo={todo} onCheck={(id: number, isChecked: boolean) => {
            const todoIndex = todos.findIndex(todo => todo.id === id);
            if (todoIndex === -1) {
                console.warn(`Todo with id=${id} was not find`);
                return;
            }
            todo.checked = isChecked;

        }} />)}
    </div>;
};

export default TodoList;