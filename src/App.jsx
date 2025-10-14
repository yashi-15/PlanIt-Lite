import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(null);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    }, []);

    const addTodo = (data) => {
        localStorage.setItem("todos", JSON.stringify([...todos, data]));
        setTodos((prevTodos) => [...prevTodos, data]);
    };
    const editTodo = (data) => {
        const updatedTodos = todos.map((todo) => (todo.id === editMode ? { ...todo, ...data } : todo));
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
        setEditMode(null);
    };
    const markCompleteTodo = (id, value) => {
        const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: value } : todo));
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        console.log(id);
        const filtered = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(filtered));
        setTodos(filtered);
    };

    return (
        <>
            <div className="flex gap-6 bg-zinc-900 h-dvh p-5">
                <AddTodo todos={todos} editMode={editMode} setEditMode={setEditMode} addTodo={addTodo} editTodo={editTodo} />
                <TodoList todos={todos} setEditMode={setEditMode} deleteTodo={deleteTodo} markCompleteTodo={markCompleteTodo} />
            </div>
        </>
    );
}

export default App;
