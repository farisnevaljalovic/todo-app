import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Todo({ todo, index, deleteTodo, markTodo}) {
    return (
        <Card className="text-center mb-5">
            <Card.Header>Todo: {index + 1}</Card.Header>
            <Card.Body>
                <Card.Title className={todo.done? 'complete' : 'inComplete'}>{todo.msg}</Card.Title>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                {todo.done ?
                    (
                        <Button variant='primary' onClick={() => markTodo(index)}>Unmark</Button>
                    ) :
                    (
                        <Button variant="warning" onClick={() => markTodo(index)}>Mark</Button>
                    )
                }
                <Button variant="danger" onClick={()=> deleteTodo(todo.id)}>Delete</Button>
            </Card.Footer>
        </Card>
    )
}

export default Todo
