import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, setEditMode, markCompleteTodo }) => {
    const tags = [...new Set(todos.map((todo) => todo.tag))];
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [filterTag, setFilterTag] = useState("All");
    const [filterCompleted, setFilterCompleted] = useState("All");
    const [sort, setSort] = useState("old-new");

    useEffect(() => {
        let result = [...todos];

        if (filterTag !== "All") {
            result = result.filter((todo) => todo.tag === filterTag);
        }

        if (filterCompleted === "Done") {
            result = result.filter((todo) => todo.completed === true);
        } else if (filterCompleted === "Pending") {
            result = result.filter((todo) => todo.completed === false);
        }

        if (sort === "new-old") {
            result = [...result].reverse();
        }

        setFilteredTodos(result);
    }, [todos, filterTag, filterCompleted, sort]);

    return (
        <div className="basis-2/3 mx-auto max-w-xl overflow-y-scroll modern-thin">
            <h1 className="text-violet-300 text-2xl mb-4 text-center sticky top-0 bg-zinc-900">Your Tasks</h1>
            <div className="flex justify-between">
                <div className="flex gap-4 mx-2">
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-xs">Tag:</label>
                        <select name="tag" id="tag" value={filterTag} onChange={(e) => setFilterTag(e.target.value)} className="text-white focus:outline-none">
                            <option value="All" className="bg-black">
                                All
                            </option>
                            {tags.map((tag) => {
                                return (
                                    <option value={tag} key={tag} className="bg-black">
                                        {tag}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-xs">Status:</label>
                        <select name="completed" id="completed" value={filterCompleted} onChange={(e) => setFilterCompleted(e.target.value)} className="text-white focus:outline-none">
                            <option value="All" className="bg-black">
                                All
                            </option>
                            {["Done", "Pending"].map((val) => {
                                return (
                                    <option value={val} key={val} className="bg-black">
                                        {val}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <label className="text-gray-400 text-xs">Sort:</label>
                        <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className="text-white focus:outline-none">
                            <option value="old-new" className="bg-black">
                                Old-New
                            </option>
                            <option value="new-old" className="bg-black">
                                New-Old
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 divide-y divide-gray-600">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} data={todo} setEditMode={setEditMode} deleteTodo={deleteTodo} markCompleteTodo={markCompleteTodo} />;
                })}
            </div>
        </div>
    );
};

export default TodoList;
