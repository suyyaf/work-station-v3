import React from "react";
import axios from "axios";

const URL = "http://localhost:5000/task";
const AXIOS_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    token: localStorage.getItem("token")
  }
};

const TaskList = ({ refetch, tasks, setTasks }) => {

    const toggleDone = (id) => {
        axios.put(`${URL}/${id}`, {}, AXIOS_CONFIG)
            .then(res => {
                if (res.status === 200) {
                    console.log(`res`, res)
                }
            })
            .then(() => refetch())
            .catch(err => console.log(`err`, err))
    }

    return(
        <>
        {tasks.filter(task => !task.isCompleted).map(task => (
            <div className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center" key={task._id}>
                {task.title}
                <input type="button" onClick={() => toggleDone(task._id)} className="py-2 px-5 bg-green-400 text-white rounded-md cursor-pointer" value="DONE" />
            </div>
        ))}

        {tasks.filter(task => task.isCompleted).map(task => (
            <div className="border border-gray-400 bg-grey-400 text-lighter p-4 rounded-md mb-4 flex justify-between items-center" key={task._id}>
                {task.title}
                <input type="button" onClick={() => toggleDone(task)} className="py-2 px-5 bg-green-100 text-white rounded-md cursor-pointer" value="DONE" />
            </div>
        ))}
        </>
    )
}

export default TaskList;
