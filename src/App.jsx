import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    }, [todos]);

    return (
        <>
            <div className="flex gap-6 bg-zinc-900 h-dvh p-5">
                <AddTodo todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} />
            </div>
        </>
    );
}

export default App;
