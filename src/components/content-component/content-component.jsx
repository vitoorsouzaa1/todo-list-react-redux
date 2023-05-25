import React from 'react'
import { useSelector } from 'react-redux'

// Components
import { TodoItem } from '../todo-item/todo-item.component'

// Styles
import './content-component.scss'

export const ContentComponent = () => {
  const todoList = useSelector((state) => state.todo.todoList)

  const sortedTodos = [...todoList]
  sortedTodos.sort((a, b) => new Date(b.time) - new Date(a.time))

  return (
    <div>
      {sortedTodos && sortedTodos.length > 0
        ? sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'Todo not found'}
    </div>
  )
}
