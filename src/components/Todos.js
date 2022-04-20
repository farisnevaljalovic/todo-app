import React from 'react'
import Todo from './Todo'

function Todos({ todos, deleteTodo, markTodo }) {
    let allTodos = todos.map((todo, index) => (
        <div className='col-4' key={index}>
            <Todo todo={todo} index={index} deleteTodo={deleteTodo} markTodo={markTodo}/>
        </div>
        
    ))
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1 mt-5'>
                    <div className='row'>
                        {allTodos}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos
