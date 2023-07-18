import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import ToDo from './components/ToDo';
import PlaceHolder from './components/PlaceHolder';
function App() {
  const [todo, setTodo] = useState([])
  const [note, setNote] = useState([])
  const [showContent, setShowContent] = useState()
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
  return (
    <div className='app'>
      <Notes onNote={newNote} onSelect={showContentHandle} contentShow={showContent} />
      {(showContent) && <PlaceHolder notesList={note} />}
      <ToDo onTodo={newTodo} />
      <PlaceHolder todoList={todo} onDelete={deleteHandle} />
    </div>
  )
}

export default App;
