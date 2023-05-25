import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'

// Reducers & Slices
import { deleteTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-item.styles.scss'

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id))
  }

  const handleUpdateTodo = () => {
    console.log('Updated')
  }

  return (
    <div className='todo-item'>
      <div className='todo-details'>
        [ ]
        <div className='todo-text'>
          <p
            className={
              'todo-text'
                ? todo.status === 'complete' && 'todo-text--completed'
                : null
            }
          >
            {todo.title}
          </p>
          <p className='todo-time'>{todo.time}</p>
        </div>
      </div>
      <div className='todo-actions'>
        <div className='todo-icon' onClick={handleDeleteTodo}>
          <MdDelete />
        </div>
        <div className='todo-icon' onClick={handleUpdateTodo}>
          <MdEdit />
        </div>
      </div>
    </div>
  )
}
