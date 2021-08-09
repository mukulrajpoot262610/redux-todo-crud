import NavbarComp from './components/Navbar';
import { Container, Form, Button } from 'react-bootstrap'
import TodoCard from './components/TodoCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from './store/store'
import { useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const mainTodos = useSelector(state => state.todos)

  console.log(mainTodos)

  useEffect(() => {
    setTodos(mainTodos)
  }, [mainTodos])

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState()
  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState()

  const handleActive = () => {
    const newTodo = mainTodos.filter((a) => a.completed === false)
    setTodos(newTodo)
  }

  const handleComplete = () => {
    const newTodo = mainTodos.filter((a) => a.completed === true)
    setTodos(newTodo)
  }

  const handleAll = () => {
    setTodos(mainTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (toggle) {
      dispatch(editTodo(input, id))
      setToggle(false)
      setInput("")
    } else {
      dispatch(addTodo(input))
      setToggle(false)
      setInput("")
    }

  }

  const handleEdit = (task, id) => {
    setToggle(true)
    setInput(task)
    setId(id)
  }

  const handleReset = () => {
    setToggle(false)
    setInput("")
  }

  return (
    <>
      <NavbarComp />

      <Form onSubmit={handleSubmit}>
        <Container className="mt-5">
          <Form.Group className="mb-3">
            <h1>{toggle ? "Edit" : "Add"} ToDo</h1>
            <Form.Control size="lg" type="text" placeholder="Add Todo" value={input} onChange={e => setInput(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
          <Button variant="primary" type="reset" onClick={handleReset}>Reset</Button>
        </Container>
      </Form>

      <Container className="my-5">
        <Button variant="primary" type="submit" onClick={handleAll}>All</Button>
        <Button variant="primary" type="submit" className="mx-2" onClick={handleActive} >Active</Button>
        <Button variant="primary" type="submit" onClick={handleComplete}>Completed</Button>
      </Container>

      <Container className="my-5">
        {
          todos.length > 0 ? todos.map((data) => <TodoCard data={data} key={data.id} handleEdit={handleEdit} />) : <p>No Data, Try Adding some Tasks</p>
        }
      </Container>
    </>
  );
}

export default App;
