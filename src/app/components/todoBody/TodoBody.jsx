'use client'
import React, { useState } from 'react';
import './todoBody.scss'
import Image from 'next/image';

const TodoBody = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask('');
      setIsFormVisible(false);
    }
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='todo-body'>
      <div className='tasks-container'>
        <p className='title'>Tasks a Fazer</p>
        <div className='background-tela'>
          {tasks.filter((task) => !task.completed).map((task) => (
            <div key={task.id} className='task'>
              <div className='task-box' onClick={() => toggleTask(task.id)}></div>
              {task.text}{' '}
              <Image src="/images/Icon.png" alt="delete" width={20} height={20} onClick={() => deleteTask(task.id)} className='task-delete' />

              {/* <div className='task-delete' onClick={() => toggleTask(task.id)}>delete</div> */}
            </div>
          ))}
        </div>

        <p className='title'>Tasks Feitas</p>
        <div className='background-tela'>
          {tasks.filter((task) => task.completed).map((task) => (
            <div key={task.id} className='completed task'>
              <div className='task-box-completed' onClick={() => toggleTask(task.id)}>
                <Image src="/images/Icon-ok.png" alt="delete" width={10} height={10} />
              </div>
              {task.text}{' '}
              <Image src="/images/Icon.png" alt="delete" width={20} height={20} onClick={() => deleteTask(task.id)} className='task-delete' />
            </div>
          ))}
        </div>

      </div>
      {isFormVisible ? <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className='primary-button-task' onClick={addTask}>Adicionar Task</button>
      </div> : <button className='addTask-button' onClick={() => setIsFormVisible(true)}>Adicionar Task</button>}
    </div>
  );
};

export default TodoBody;
