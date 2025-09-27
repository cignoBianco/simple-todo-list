import React from 'react';

import Todo from '../../interfaces/todoList';

import styles from './Panel.module.css';
import Button from '../Button/Button';


interface PanelProps {
    addTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

const defaultTodo: Todo = {
    id: 0,
    title: '',
    description: ''
}

const Panel: React.FC<PanelProps> = ({addTodo}) => {
    const [todo, setTodo] = React.useState<Todo>(defaultTodo);
    const { title, description } = todo;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({...todo, [name]: value});
    };

    const addButtonHandler = () => {
        if (!todo || !todo.title) {
            console.warn('Todo is not filled');
            return;
        }

        addTodo(todo);
        setTodo(defaultTodo);
    };

    return <div className={styles.todo_panel_container}>
        <div className={styles.fields_container}>
            <div className={styles.field_container}>
                <label htmlFor="title">
                    <div>Title</div>
                    <input
                        id='title'
                        name='title'
                        type="text"
                        maxLength={30}
                        value={title}
                        onChange={inputChangeHandler}
                    />
                </label>
            </div>
            <div className={styles.field_container}>
                <label htmlFor="description">
                    <div>Description</div>
                    <input
                        id='description'
                        name='description'
                        type="text"
                        value={description}
                        onChange={inputChangeHandler}
                    />
                </label>
            </div>
            <div className={styles.button_container}>
                <Button color='blue' onClick={addButtonHandler}>
                    ADD
                </Button>
            </div>
        </div>
    </div>;
};

export default Panel;