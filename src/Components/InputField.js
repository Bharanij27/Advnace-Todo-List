import React, { useState } from 'react';

const InputField = (props) =>{
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('Low Priority');
    
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const submit = () =>{
        if(inputValue) (props.addTask(inputValue, selectValue));
        setInputValue('');
        setSelectValue('0');
    }

    return (
        <div className = "new-task">
            <input 
                onChange = {onInputChange} 
                type = "text" 
                placeholder = "Add New Task" 
                value={inputValue}
            />
            <select value={selectValue} onChange = {(e) => setSelectValue(e.target.value)}>
                <option value="0" >Low Priority</option>
                <option value="5">Medium Priority</option>
                <option value="10">High Priority</option>
            </select>
            <button className="addTask" onClick = {submit}>Add Task</button>
        </div>
    )
}

export default InputField