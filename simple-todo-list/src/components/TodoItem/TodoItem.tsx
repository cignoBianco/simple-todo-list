import React from 'react';
import Todo from '../../interfaces/todoList';

import styles from './TodoItem.module.css';


interface TodoItemProps {
    todo: Todo,
    onCheck: (id: number, isChecked: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = (TodoItemProps) => {
    const { todo } = TodoItemProps;
    const {id, title, description, checked} = todo;

    const [currentTodo, setCurrentTodo] = React.useState<Todo>(todo);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentTodo({...currentTodo, [name]: value});
        //onCheck(currentTodo.id, value);
    };

    return <div className={styles.todoItem}>
        <h3>{title}</h3>
        <p>{description}</p>
        <input
            type="checkbox"
            name="checked"
            id="checked"
            checked={checked}
            onChange={inputChangeHandler}
        />
    </div>;
};

export default TodoItem;