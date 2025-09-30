import React from 'react';
import Todo from '../../../interfaces/todoList';

import styles from './TodoItem.module.css';
import Button from '../../Button';


interface TodoItemProps {
    todo: Todo,
    onItemChanged: (todo: Todo) => void;
    onEditClick: (id: Todo['id']) => void;
    onDelete: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = (TodoItemProps) => {
    const { todo, onItemChanged, onDelete, onEditClick } = TodoItemProps;
    const {id, title, description, checked} = todo;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        onItemChanged({...todo, [name]: checked});
    };

    return <div className={styles.todoItem}>
        <div className={styles.todoItem_content}>
            <h3 className={styles.todoItem_title}>{title}</h3>
            <p className={styles.todoItem_description}>{description}</p>
        </div>
        <div className={styles.todoItem_checkboxContainer}>
            <input
                className={styles.todoItem_checkbox}
                type="checkbox"
                name="checked"
                checked={checked}
                onChange={inputChangeHandler}
            />
        </div>
        <div className={styles.todoItem_buttonsContainer}>
            <Button color='orange' onClick={() => onEditClick(id)}>edit</Button>
            <Button
                onClick={() => onDelete(id)}
                color='red'>
                x
            </Button>
        </div>
    </div>;
};

export default TodoItem;