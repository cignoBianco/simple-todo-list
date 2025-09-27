import React from 'react';
import Todo from '../../interfaces/todoList';
import TodoItem from './TodoItem';


interface TodoListProps {
    todosList: Todo[];
    todosChangedHandler: (todos: Todo[]) => void;
    deleteHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
    const { todosList, todosChangedHandler, deleteHandler } = props;

    return <div>
        <h2>Todos:</h2>
        {todosList.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
            onItemChanged={(todo: Todo) => {
                const result = [...todosList];
                result[result.findIndex(td => td.id === todo.id)] = todo;
                todosChangedHandler(result);
            }}
            onDelete={deleteHandler}
        />)}
    </div>;
};

export default TodoList;