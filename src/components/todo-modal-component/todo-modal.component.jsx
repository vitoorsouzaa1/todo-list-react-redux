import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

// Components
import { ButtonComponent } from '../button-component/button.component'

// Reducers & Slicers
import { addTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-modal.styles.scss'

export const TodoModalComponent = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')

  const dispatch = useDispatch()

  const handleTaskSubmit = (e) => {
    e.preventDefault()

    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleDateString(),
        })
      )
    }
  }

  return (
    modalOpen && (
      <div className='modal-wrapper'>
        <div className='modal-container'>
          <div
            className='modal-closebtn'
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
          >
            <MdOutlineClose />
          </div>
          <form
            className='form-container'
            onSubmit={(e) => handleTaskSubmit(e)}
          >
            <h1 className='form-title'>Add Task</h1>
            <label htmlFor='title'>
              Title
              <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor='status'>
              Status
              <select
                type='text'
                id='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='incomplete'>Incomplete</option>
                <option value='complete'>Complete</option>
              </select>
            </label>
            <div className='button-container'>
              <ButtonComponent type='submit' variant='primary'>
                Add Task
              </ButtonComponent>
              <ButtonComponent
                type='button'
                variant='secondary'
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    )
  )
}
