import TodoItem from "./render";
    export function TodoList  ({ todos, onEditTodo, onDeleteTodo })  {
        return (
            <ul>
                {todos.map((t) => (
                    <TodoItem
                        key={t.id}
                        todo={t}
                        onEditTodo={onEditTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </ul>
        );
    };