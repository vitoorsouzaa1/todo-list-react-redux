import React from 'react'
import { useSelector } from 'react-redux'

// Components
import { TodoItem } from '../todo-item/todo-item.component'

// Styles
import './content-component.scss'

export const ContentComponent = () => {
  const todoList = useSelector((state) => state.todo.todoList)

  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const sortedTodos = [...todoList]
  sortedTodos.sort((a, b) => new Date(b.time) - new Date(a.time))

  const filteredTodoList = sortedTodos.filter((item) => {
    if (filterStatus === 'all') {
      return true
    }

    return item.status === filterStatus
  })

  return (
    <div className='content__wrapper'>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'Todo not found'}
    </div>
  )
}
