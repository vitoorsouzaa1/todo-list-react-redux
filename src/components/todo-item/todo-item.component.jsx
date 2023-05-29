import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

// Components
import { TodoModalComponent } from '../todo-modal-component/todo-modal.component'
import { CheckBoxComponent } from '../check-box-component/check-box.component'

// Reducers & Slices
import { deleteTodo, updateTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-item.styles.scss'

export const TodoItem = ({ todo }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Successfully deleted Todo!')
  }

  const handleUpdateTodo = () => {
    setUpdateModalOpen(true)
  }

  const handleChecked = () => {
    setChecked(!checked)

    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete',
      })
    )
  }

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [todo.status])

  return (
    <>
      <div className='todo-item'>
        <div className='todo-details'>
          <CheckBoxComponent checked={checked} handleChecked={handleChecked} />
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
