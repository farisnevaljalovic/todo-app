import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from "react-bootstrap";

function AddTodo({ addTodo }) {
    const [id, setId] = useState('');
    const [msg, setMsg] = useState('');
    const [done, setDone] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        let todo = { id: id, msg: msg, done: done }
        addTodo(todo);  
        setMsg('')
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter your todo..."
                            aria-describedby="basic-addon2"
                            value={msg}
                            onChange={(e)=> setMsg(e.target.value)}
                        />
                        <Button variant="primary" id="button-addon2" onClick={handleClick}>
                            Add
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>          
    )
}

export default AddTodo
