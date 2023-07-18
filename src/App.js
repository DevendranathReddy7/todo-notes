import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import ToDo from './components/ToDo';
import PlaceHolder from './components/PlaceHolder';
import EditToDo from './components/EditToDo';
function App() {
  const [todo, setTodo] = useState([])
  const [note, setNote] = useState([])
  const [showContent, setShowContent] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const [editableTodo, setEditableTodo] = useState([])
  const newTodo = (todo) => {
    setTodo((prev) => [...prev, { id: Math.random().toString(36), todo: todo }])
  }

  const newNote = (note) => {
    setNote((prev) => [...prev, note])
  }
  const showContentHandle = (show) => {
    setShowContent(show)
  }
  useEffect(() => {
    setShowContent(true)
  }, [])

  const deleteHandle = (id) => {
    const updatedTodo = todo.filter(eachTodo => {
      return eachTodo.id !== id
    })
    setTodo(updatedTodo)
  }

  const editHandle = (id) => {
    setIsEdit((prev) => { return !prev })
    const new_editableTodo = todo.filter(eachTodo => {
      return eachTodo.id === id
    })
    setEditableTodo(new_editableTodo)

  }
  const toggleModal = (isModalOpened) => {
    setIsEdit(isModalOpened)
  }

  const modifiedContent = (newC) => {
    const newTodo = todo.filter(eachTodo => {
      if (eachTodo.id === newC.id) {
        // setTodo(...todo, [{ id, todo: newC.todo }])
        setTodo((prev) => [...prev, { id: newC.id, todo: newC.todo }])
      }
    })
  }
  return (
    <div className='app'>
      <Notes onNote={newNote} onSelect={showContentHandle} contentShow={showContent} />
      {(showContent) && <PlaceHolder notesList={note} />}
      <ToDo onTodo={newTodo} />
      <PlaceHolder todoList={todo} onDelete={deleteHandle} onEdit={editHandle} />
      {isEdit && <EditToDo editTodo={editableTodo} onToggle={toggleModal} onModify={modifiedContent} />}
    </div>
  )
}

export default App;
