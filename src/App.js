import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import Todos from './components/Todos'
import "./style.css";

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        todo.id = Date.now();
        setTodos([...todos,todo])
    }
    const deleteTodo = (id) => {
        let filterTodo = todos.filter(todo => todo.id !== id);
        setTodos(filterTodo)
    }
    const markTodo = (index) => {
        let copyTodos = [...todos];
        copyTodos[index].done = !copyTodos[index].done;
        setTodos(copyTodos);
    }
    return (
        <>
            <Header />
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} deleteTodo={deleteTodo} markTodo={markTodo}/>
        </>
    )
}

export default App
