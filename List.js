import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'

function List() {
    const[todos, setTodos] = useState([]);

    //Add Todos
    const addTodo = input => {
        if(!input.text|| /^\s*$/.test(input.text)){
            return;
        }
        const newTodos = [input, ...todos];
        setTodos(newTodos);
        console.log(input)
  };
    
  const checkTodo = index => {
    const removeFromArr = [...todos].filter(todo=>todo.id !== index)
    setTodos(removeFromArr)
  }

  const updateTodo = (index, newVal) => {
    if(!newVal.text || /^\s*$/.test(newVal.text)){
        return;
    }
    setTodos(prev => prev.map(item=> (item.id === index ? newVal : item)));
  }

  const addCalendar = (index) => {
    //ADD NEW CONTENT HERE IN AUGUST
    alert("Still in Development");
  }

  const markTodo = index => {
    let updatedTodos = todos.map(todo=>{
        if(todo.id === index){
            todo.isDone = !todo.isDone
        }
        return todo
    });
    setTodos(updatedTodos);
  }

  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() +1;
  let date = today.getDate();
  
  return (
    <div>
        <h1>Let's set some goals for the day!</h1>
        <h2>Today's date: {month}/{date}/{year}</h2>
        <Form onSubmit={addTodo} />
        <Todo todos ={todos} doneTodo={markTodo} checkTodo={checkTodo} updateTodo={updateTodo} addCalendar={addCalendar}/>
    </div>
  )
}

export default List