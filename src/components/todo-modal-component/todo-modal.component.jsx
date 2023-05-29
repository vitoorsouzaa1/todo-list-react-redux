import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-hot-toast'

// Components
import { ButtonComponent } from '../button-component/button.component'

// Reducers & Slicers
import { addTodo, updateTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-modal.styles.scss'

export const TodoModalComponent = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')

  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('incomplete')
    }
  }, [type, todo, modalOpen])

  const handleTaskSubmit = (e) => {
    e.preventDefault()

    if (title === '') {
      toast.error('Please enter a title.')
    }

    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        )

        toast.success('Task Added Successfully!')
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          )
        } else {
          toast.error('No changes made!')
        }
      }
      setModalOpen(false)
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
            <h1 className='form-title'>
              {' '}
              {type === 'update' ? 'Update' : 'Add'} Task
            </h1>
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
                {type === 'update' ? 'Update' : 'Add'} Task
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
