import React, { useState, useEffect } from 'react';
import { useList } from '../hooks/useList';

const ExercUselist = () => {
    const tasks = useList([]);
    const [newTaskDesc, setNewTaskDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTaskDesc);
        setNewTaskDesc('');
    };

    const handleInputChange = (e) => {
        setNewTaskDesc(e.target.value);
    };

    const buttonStyles = {
        background: 'aliceblue',
        color: 'black',
        padding: '12px',
        border: 'none'
    }

    return (
      <div>
        <h1>Task List</h1>

        <form onSubmit={handleSubmit}>
          <input style={buttonStyles} value={newTaskDesc} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button style={buttonStyles} type="button">Create your task</button>
        </form>

        {
                tasks.isEmpty()
                ? (
                  <p>Task list is is empty</p>
                )
                : (
                  <ul>
                    {tasks.value.map((task, index) => (
                      <li key={index}>
                        {task}
                        <input style={{marginLeft: '20px'}} type="checkbox" onClick={() => tasks.remove(index)} />
                      </li>
                        ))}
                  </ul>
                )
        }

        <button style={buttonStyles} onClick={() => tasks.clear()}>Clear all</button>

        <button style={buttonStyles} onClick={() => tasks.sortList()}>Order my list</button>

        <button style={buttonStyles} onClick={() => {tasks.revertList()}}>Revert my list</button>

      </div>
    );
}

export default ExercUselist;