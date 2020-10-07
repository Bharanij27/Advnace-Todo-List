import React from 'react';

const TaskLists = (props) => {
    let {tasks, toggleTask, deleteTask, updatePriority} = props;
    
    return (
        <ol>
        {tasks.map((task, index) =>{
        return(
            <li key = {index}>
                <span className="list-task" onClick = {() => deleteTask(index)}>⛔</span> 
                <span className="list-task" onClick = {() => toggleTask(index)}>
                {task.name}
                </span>
                <select value={task.priority} onChange = {(e) => updatePriority(index, e.target.value)}>
                    <option value="0" >Low Priority</option>
                    <option value="5">Medium Priority</option>
                    <option value="10">High Priority</option>
                </select>
                {task.isComplete ? "✅" : "❌"}
            </li>
        )
        })}
        </ol>
    );
}

export default TaskLists;