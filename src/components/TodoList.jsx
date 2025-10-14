import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, setEditMode, markCompleteTodo }) => {
    return (
        <div className="basis-2/3 mx-auto max-w-xl overflow-y-scroll modern-thin">
            <h1 className="text-violet-300 text-2xl mb-4 text-center">Your Tasks</h1>
            <div className="flex flex-col gap-2 divide-y divide-gray-600">
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} data={todo} setEditMode={setEditMode} deleteTodo={deleteTodo} markCompleteTodo={markCompleteTodo} />;
                })}
            </div>
        </div>
    );
};

export default TodoList;
