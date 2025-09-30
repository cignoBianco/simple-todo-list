import React from 'react';
import Todo from '../../interfaces/todoList';
import TodoItem from './TodoItem';
import Panel from '../Panel';


interface TodoListProps {
    todosList: Todo[];
    todosChangedHandler: (todos: Todo[]) => void;
    deleteHandler: (id: Todo['id']) => void;
    editClickHandler: (id: Todo['id']) => void;
    editTodoId: Todo['id'] | null;
    editTodo: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
    const { todosList, todosChangedHandler, deleteHandler, editClickHandler, editTodoId, editTodo } = props;

    return <div>
        {todosList.map(todo => {
            if (todo.id === editTodoId) {
                return <Panel
                    mode='edit'
                    editTodo={todo}
                    editTodoHandler={editTodo}
                />
            }
            return <TodoItem
            key={todo.id}
            todo={todo}
            onItemChanged={(todo: Todo) => {
                const result = [...todosList];
                result[result.findIndex(td => td.id === todo.id)] = todo;
                todosChangedHandler(result);
            }}
            onDelete={deleteHandler}
            onEditClick={editClickHandler}
        />
        })}
    </div>;
};

export default TodoList;