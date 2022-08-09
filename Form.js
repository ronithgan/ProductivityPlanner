import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
    const [todo, setTodo] = useState(props.change ? props.change.value : '')
    const focus = useRef('')
    
    useEffect(()=>{
        focus.current.focus()
    })

    const makeTodo = e => { //MakeTodo
        setTodo(e.target.value);
    }

    const handleSubmit = e => { //Stops from refreshing
      e.preventDefault();
      setTodo("");
      props.onSubmit({ //Generates Random ID
        id: Math.floor(Math.random() *10000),
        text: todo
      })
    };

  return ( //To-Do Button for adding new todos
    <form className = "todo-form" onSubmit = {handleSubmit}>
        {props.change ? (
        <>
        <input type = "text" placeholder = "Update your goal!" value = {todo} className = 'todo-input edit' onChange={makeTodo} ref={focus}/>
        <button className ="todo-button edit">Update</button>
        </>
        ):
        (
            <>
            <input type = "text" placeholder = "Add your daily goals here!" value = {todo} className = 'todo-input' onChange={makeTodo} ref={focus}/>
        <button className ="todo-button">Submit</button>
        </>
        )
    }
    </form>
  )
}

export default Form