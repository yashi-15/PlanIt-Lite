import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    }, []);

    const addTodo = (data) =>{
        localStorage.setItem("todos", JSON.stringify([...todos, data]));
        setTodos(prevTodos => [...prevTodos, data])
    }

    const deleteTodo = (id) =>{
        console.log(id);
        const filtered = todos.filter(todo => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(filtered));
        setTodos(filtered)
    }

    return (
        <>
            <div className="flex gap-6 bg-zinc-900 h-dvh p-5">
                <AddTodo todos={todos} addTodo={addTodo} />
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </div>
        </>
    );
}

export default App;
