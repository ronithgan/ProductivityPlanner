import React, {useState} from 'react'
import Form from './Form'
import {MdDeleteOutline} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
import {AiOutlineCalendar} from 'react-icons/ai';

function Todo({todos, doneTodo, checkTodo, updateTodo, addCalendar}) {
    const[change, setChange] = useState({
        id:null,
        value:''
    });

    const submitUpdate = value => {
        updateTodo(change.id, value)
        setChange({
            id:null,
            value:''
        });
    };

    if(change.id){
        return <Form change={change} onSubmit = {submitUpdate}/>
    }
  return todos.map((todo, index) => (
    <div className={todo.isDone ? 'todo-row done' : 'todo-row'} key = {index}>
        <div key = {todo.id} onClick ={() => doneTodo(todo.id)}>
            {todo.text}
        </div>
        <div className ="icons">
            
            <FiEdit onClick={() => setChange({ id: todo.id, value: todo.text })}
          className='edit-icon'/>
        <MdDeleteOutline onClick={()=>checkTodo(todo.id)} className='check-icon'/>
        <AiOutlineCalendar onClick={()=>addCalendar(todo.id)} className='calendar-icon'/>
        </div>
    </div>
  ))
}

export default Todo