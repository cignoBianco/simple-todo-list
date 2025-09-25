import React from 'react';
import Todo from '../../interfaces/todoList';

import styles from './TodoItem.module.css';


interface TodoItemProps {
    todo: Todo,
    onItemChanged: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = (TodoItemProps) => {
    const { todo, onItemChanged } = TodoItemProps;
    const {id, title, description, checked} = todo;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        onItemChanged({...todo, [name]: checked});
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