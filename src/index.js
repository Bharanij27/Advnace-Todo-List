import React, { Fragment, useState } from 'react';
import ReactDom from 'react-dom';
import './styles.css'
import Title from './Components/Title';
import TaskLists from './Components/TaskLists';
import InputField from './Components/InputField';
import Status from './Components/Status'

const App = ()=> {

    const [tasks, setTasks] = useState([
        {name : "Groceries", priority : "0", isComplete : false},
        {name : "Car wash", priority : "5", isComplete : false},
        {name : "Read Newspaper", priority : "10", isComplete : false}
    ]);

    const deleteTask = (index) => {
        let data = [...tasks];
        data.splice(index, 1)
        setTasks(data);
    }

    const toggleTask = (taskIndex) => {
        setTasks(tasks.map((task, index) => {
            if(taskIndex === index){
                return {
                    ...task,
                    isComplete : !task.isComplete
                }
            }
            return task
        }));
    }

    const updatePriority = (taskIndex, value) => {
        setTasks(tasks.map((task, index) => {
            if(taskIndex === index){
                return {
                    ...task,
                    priority : value
                }
            }
            return task
        }));
    }

    const addTask = (newTask, priority) => {
        setTasks([...tasks, {name : newTask, priority, isComplete : false}]);
    } 

    return (
        <Fragment>
            <Title title = "TODO LIST APP"/>
            <Status tasks = {tasks}/>
            <InputField addTask = {addTask}/>
            <TaskLists tasks = {tasks} toggleTask = {toggleTask} updatePriority = {updatePriority} deleteTask = {deleteTask}/>
        </Fragment>
    )
}

ReactDom.render(<App/>, document.querySelector('#root'))