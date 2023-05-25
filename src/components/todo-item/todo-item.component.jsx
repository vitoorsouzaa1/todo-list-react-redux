import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

// Reducers & Slices
import { deleteTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-item.styles.scss'
import { TodoModalComponent } from '../todo-modal-component/todo-modal.component'

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Successfully deleted Todo!')
  }

  const handleUpdateTodo = () => {
    setUpdateModalOpen(true)
  }

  return (
    <>
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

      <TodoModalComponent
        type='update'
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  )
}
