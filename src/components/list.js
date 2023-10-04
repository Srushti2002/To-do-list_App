import React from 'react';
import '../styles/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function List() {

    const [task, setTask] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');

    const addTask = () => {
        if(newTask.trim() !== ''){
            setTask([...task, {text: newTask, done: false}]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTask = [...task];
        updatedTask[index].done = !updatedTask[index].done;
        setTask(updatedTask);
    };

    const deleteTask = (index) => {
        const updatedTask = [...task];
        updatedTask.splice(index, 1);
        setTask(updatedTask);
    };

    return(
        <div className="row">
            <div className="listContent">
            {/* col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center align-items-center justify-content-center  */}

                <div className="listColorCurve">
                    <h2 className="mb-4 text-center listHeading">
                    My Task-list</h2>


                    <div className="input-group mt-2 listAddBar">
                        <input
                        type="text"
                        placeholder="add your task"
                        className="form-control input-bar"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        />
                        <div className="input-group-append add-button">
                            <button className="btn btn-primary button-main" type="button" onClick={addTask}>
                                {/* <FontAwesomeIcon icon={faPlus} /> */}
                                Add
                            </button>
                    
                        </div>
                    </div>
                </div>    


            <div className="align-items-center justify-content-center listTask">
                <ul className="list-group task-item">
                    {task.map((task, index) => (
                        <li key={index}
                        className={`list-group-item  ${
                            task.done ? 'list-group-item-success': ''
                        } d-flex justify-content-between align-items-center col`}
                        style={{
                            overflowX:'hidden',
                        }}
                        >
                            <span className="col-7 task-content"
                            style={{width:'67%', overflowWrap: 'break-word', textDecoration: task.done? 'line-through': 'none',}}>
                                {task.text}
                            </span>
                            <div className="col-5 task-button">                            
                                <button className={`btn btn-${task.done ? 'warning' : 'success'} tick`} onClick={() => {toggleTask(index)}}>
                                {task.done ? <FontAwesomeIcon icon={faCheck}/>: <FontAwesomeIcon icon={faCheck} />}
                                </button>

                                <button className="btn btn-danger cross" onClick={() => {deleteTask(index)}}>
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>

                        </li>
                    ))}   
                </ul>    
            </div>
            
        </div>
        </div>


    );


}