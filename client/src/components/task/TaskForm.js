import React, { useState } from "react";
import axios from "axios";
//import Task from "./TaskList";

const URL = "http://localhost:5000/task";
const AXIOS_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    token: localStorage.getItem("token")
  }
};

const TaskForm = ({ refetch, tasks, setTasks }) => {
  const [title, setTitle] = useState("");

  const PARAMS = {
    title: title
  };

  const handleChange = e => {
    e.preventDefault();
    const input = e.target.value;
    setTitle(input);
  };

  const onSubmit = () => {
    if (title.length > 0) {
      axios
        .post(URL, PARAMS, AXIOS_CONFIG)
        .then(res => {
          if (res.status === 200) {
            setTitle("");
          }
        })
        .then(() => refetch());
    }
  };

  return (
    <div className="flex justify-between mb-8">
      <input
        className="w-full px-3 py-2 border border-green-400 rounded-md mr-4"
        type="text"
        placeholder="Add Work Space..."
        onChange={e => handleChange(e)}
        value={title}
      />
      <input
        type="button"
        className="py-2 px-5 bg-green-400 text-white rounded-md cursor-pointer"
        value="Add"
        onClick={() => onSubmit()}
      />
    </div>
  );
};

export default TaskForm;
