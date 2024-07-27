    export function TodoForm  ({ onSubmitTodo, inputRef, editID })  {
        return (
            <form onSubmit={onSubmitTodo}>
                <input
                    ref={inputRef}
                    placeholder="Rửa chén"
                />
                <button type="submit">{editID ? "Save" : "Add"}</button>
            </form>
        );
    };    