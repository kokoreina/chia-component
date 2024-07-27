import { useRef, useState } from "react";
import SearchBar from "./search";
import TodoForm from "./form";
import TodoItem from "./render";
import TodoList from "./edit";
  export function TodoApp  () {
    const [search, setSearch] = useState("");
    const [todos, setTodos] = useState([]);
    const [editID, setEditID] = useState(null);
    const inputRef = useRef(null);

    const onSubmitTodo = (event) => {
      event.preventDefault();

    };

    const onEditTodo = (event) => {

    };

    const onDeleteTodo = (event) => {

    };

    return (
      <>
      <h2>TANS HUy</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <TodoForm
          onSubmitTodo={onSubmitTodo}
          inputRef={inputRef}
          editID={editID}
        />
        <TodoList
          todos={todos}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </>
    );
  };

