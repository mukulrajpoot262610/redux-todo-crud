import { createStore } from "redux";
import { v4 as uuidv4 } from 'uuid'
import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = {
    todos: [{
        id: uuidv4(),
        task: 'Complete HomeWork',
        completed: true,
    },
    {
        id: uuidv4(),
        task: 'Buy Banana',
        completed: false,
    },
    {
        id: uuidv4(),
        task: 'Make Todo',
        completed: false,
    },]
}


export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const markCompleted = (id) => {
    return {
        type: 'MARK_COMPLETED',
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const editTodo = (task, id) => {
    return {
        type: 'EDIT_TODO',
        payload: { task, id }
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [{ id: uuidv4(), task: action.payload, completed: false }, ...state.todos]
            }
        case 'MARK_COMPLETED':
            const updatedTodo = state.todos.find((a) => a.id === action.payload)
            updatedTodo.completed = true
            return {
                ...state,
                todos: [...state.todos]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((a) => a.id !== action.payload)
            }
        case 'EDIT_TODO':
            const editedTodo = state.todos.find((a) => a.id === action.payload.id)
            editedTodo.task = action.payload.task
            editedTodo.completed = false
            return {
                ...state,
                todos: [...state.todos]
            }
        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools())

export default store