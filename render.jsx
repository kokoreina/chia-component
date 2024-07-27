    export function TodoItem  ({ todo, onEditTodo, onDeleteTodo })  {
        return (
            <li>
                <span>{todo.text}</span>
                <button data-id={todo.id} data-text={todo.text} onClick={onEditTodo}>
                    Edit
                </button>
                <button data-id={todo.id} onClick={onDeleteTodo}>
                    Delete
                </button>
            </li>
        );
    };