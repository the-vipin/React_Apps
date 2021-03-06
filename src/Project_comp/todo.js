import React, { useRef, useState } from "react";

const ToDoApplication=()=>{
    const[Todolist, setTodolist] = useState([]);
    const[currentTask, setcurrentTask] = useState("");
    
    const inputTask = useRef(null);

    const addTask=()=>{
        console.log("cureent task", currentTask);
        setTodolist([...Todolist, {
            task: currentTask,
            completed: false
        }]);
        inputTask.current.value = "";
        setcurrentTask("");
    };
    console.log("todo list", Todolist);

    const deleteTask=(deletetask)=>{
        setTodolist(Todolist.filter((item) => item.task !== deletetask));
    }

    const deleteCompTask=()=>{
        setTodolist(Todolist.filter((item)=>{return !item.completed ;}))
    }

    const completeTask=(index, value)=>{
        const newTasks = [...Todolist];
        
        if (value) {
            console.log("index", index)
        console.log("value", value)
            newTasks[index].completed = true;
        }
        else {
            newTasks[index].completed = false;
        }
        setTodolist(newTasks);
    }

    const ResetTodoList=()=>{
        setTodolist([])
    }
    
    return(
        <div className="w-full h-screen bg-gray-100 pt-8">
            <div className="bg-white p-2 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">ToDo App</h1>
                    <div className="mt-4 flex">
                        <input
                            ref={inputTask} 
                            onChange={(e)=>{setcurrentTask(e.target.value)}} 
                            className="w-80 border-b-2 border-gray-500 text-black"
                            type="text" placeholder="Enter your task here" 
                        />
                        <button
                            onClick={()=> {addTask()}} 
                            className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                        >   
                            <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                            <span>Add</span>
                        </button>
                    </div>        
                </div>
                <div className="mt-8">
                    <ul>
                        {Todolist.map((item, index)=>{
                            return (
                            <li className="p-2 rounded-lg" key={index}>
                                <div className="flex align-middle flex-row justify-between">
                                    <div className="p-2">
                                        <input type="checkbox" className="h-6 w-6 " value="true" 
                                        onChange={(e)=> {completeTask(index, e.target.checked)}} />
                                    </div>
                                    <div className="p-2">
                                        {item.completed===true ?<p className="text-lg line-through text-gray-400">{item.task}</p> :<p className="text-lg text-black">{item.task}</p>}
                                        
                                    </div>
                                    <button 
                                        onClick={()=> {deleteTask(item.task)}} 
                                        className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                        <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr className="mt-2"/>
                            </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mt-8">
                    <button onClick={()=>{deleteCompTask()}}
                        className="border-2 border-red-500 p-2 text-red-500"
                    >Clear Completed Task</button>
                    <button onClick={()=>{ResetTodoList()}}
                        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
                    >Reset Todo List</button>
                </div>
            </div>    
        </div>
    );
};
export default ToDoApplication;