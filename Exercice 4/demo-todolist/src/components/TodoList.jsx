import { useState } from 'react'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    const newTodo = { id: Date.now(), text: trimmed }
    setTodos([...todos, newTodo])
    setText('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div>
      <h2>Ma TodoList</h2>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo} disabled={!text.trim()}>
        Ajouter
      </button>

      <ul>
        {todos.length === 0 && <li>Aucune tâche</li>}
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}