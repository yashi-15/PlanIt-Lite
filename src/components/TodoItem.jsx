import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ data, deleteTodo }) => {
    const date = new Date(data.id);
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    <input type="checkbox" checked={data.completed} readOnly className="w-4 h-4 accent-violet-500 cursor-pointer" />
                    <h2 className="text-gray-200 text-2xl">
                        {data.title} <span className="bg-violet-500 text-gray-200 px-2 py-[2.5px] mx-2 text-xs rounded-full">{data.tag}</span>
                    </h2>
                </div>
                <div>
                    <MdDelete color="white" size={20} className="cursor-pointer" onClick={()=> deleteTodo(data.id) } />
                </div>
            </div>
            <p className="text-gray-300 font-light">{data.description}</p>
            <p className="text-gray-400 font-light text-xs py-2">{date.toDateString()}</p>
        </div>
    );
};

export default TodoItem;
