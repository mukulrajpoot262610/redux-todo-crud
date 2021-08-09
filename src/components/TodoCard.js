import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, markCompleted } from '../store/store'

const TodoCard = ({ data, handleEdit }) => {

    const dispatch = useDispatch()
    const { id, task, time, completed } = data

    const handleComplte = () => {
        dispatch(markCompleted(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Card style={{ width: '100%' }} className="m-2">
            <Card.Body>
                <Card.Title>{time}</Card.Title>
                <h1 style={{ textDecoration: `${completed ? "line-through" : ""}` }}>{task}</h1>
                <h5>{completed ? "Completed" : "Active"}</h5>
                <Container className="ml-auto" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="success" onClick={handleComplte} >Completed</Button>
                    <Button variant="warning" className="mx-2" onClick={() => handleEdit(task, id)} >Edit</Button>
                    <Button variant="danger" onClick={handleDelete} >Delete</Button>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default TodoCard
