import React, { useState } from "react";

const AddTodo = ({todos ,addTodo}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");

    const saveTodo = () => {
        const data = {
            id: Date.now(),
            title,
            description,
            tag,
            completed: false,
        };
        addTodo(data)
        setTitle("");
        setDescription("");
        setTag("");
    };

    return (
        <div className="basis-1/3 self-center max-w-md mx-auto">
            <h1 className="text-violet-300 text-2xl mb-4 text-center">Add New</h1>
            <div className="flex flex-col gap-2">
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project PlanIt Lite" className="text-violet-400 border border-gray-500 py-1 px-3 rounded-sm" />
                <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add Delete Task feature" className="text-violet-400 border border-gray-500 py-1 px-3 rounded-sm h-28" />
                <input type="text" name="tag" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" className="text-violet-400 border border-gray-500 py-1 px-3 rounded-sm" />
                <button onClick={saveTodo} className="bg-violet-500 py-1 px-2 rounded-full text-gray-100 font-semibold cursor-pointer hover:bg-violet-400 shadow-md shadow-violet-400">
                    Add
                </button>
            </div>
        </div>
    );

};

export default AddTodo;
