import React from 'react';
import Description from './Description'

const Status = (props) => {
    let {tasks} = props;
    let completed, pending, high, low, mid;
    completed = pending = high = low = mid = 0;

    tasks.forEach(task => {
        (task.isComplete) ? completed++ : pending++;
        (task.priority === '0') ? low++ : (task.priority === '5') ? mid ++ : high++;
    })
    return (
        <div className = "status">
            <Description title = "Completed" value = {completed}/>
            <Description title = "Pending" value = {pending}/>
            <Description title = "Low Priority" value = {low}/>
            <Description title = "Meduim Priority" value = {mid}/>
            <Description title = "High Priority" value = {high}/>
        </div>
    )
}

export default Status;