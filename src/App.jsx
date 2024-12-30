import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    function Add() {
        if (inputValue.trim()) {
            setTodo((T) => [...T, inputValue.trim()]);
            setInputValue("");
        }
    }

    function ChangeValue(event) {
        setInputValue(event.target.value);
    }

    function Delete(index) {
        setTodo((t) => t.filter((_, i) => i !== index));
        setCompletedTasks((prev) => prev.filter((i) => i !== index));
    }

    function Taskdone(index) {
        setCompletedTasks((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    }

    return (
        <>


            <div className="parent">
                <h1>To Do List</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={ChangeValue}
                    placeholder="Add a task"
                />
                <button onClick={Add}>Add</button>

                <ul>
                    {todo.map((t, index) => (

                        <li
                            key={index}
                            onClick={() => Taskdone(index)}
                            className={completedTasks.includes(index) ? "completed" : ""}
                        >
                            {t}
                            <button
                                onClick={(e) => {
                                    Delete(index);
                                    e.stopPropagation();
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
