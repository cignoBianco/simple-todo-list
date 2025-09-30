import React from 'react';

import Todo from '../../interfaces/todoList';

import styles from './Panel.module.css';
import Button from '../Button/Button';


interface AddPanelProps {
    mode: 'add';
    addTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

interface EditPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
    editTodoHandler: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

const defaultTodo: Todo = {
    id: 0,
    title: '',
    description: ''
}

type TodoPanelProps = AddPanelProps | EditPanelProps;

const Panel: React.FC<TodoPanelProps> = (props) => {
    const isEdit = props.mode === 'edit';

    const [todo, setTodo] = React.useState<Omit<Todo, 'id' | 'checked'>>(isEdit ? props.editTodo : defaultTodo);
    const { title, description } = todo;

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({...todo, [name]: value});
    };

    const saveButtonHandler = () => {
        if (!todo || !todo.title) {
            console.warn('Todo is not filled');
            return;
        }

        if (isEdit) {
            return props.editTodoHandler(todo);
        }

        props.addTodo(todo);

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
                <Button color='blue' onClick={saveButtonHandler}>
                    SAVE
                </Button>
            </div>
        </div>
    </div>;
};

export default Panel;