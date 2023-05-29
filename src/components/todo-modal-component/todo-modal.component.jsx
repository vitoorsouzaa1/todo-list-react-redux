import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import { ButtonComponent } from '../button-component/button.component'

// Reducers & Slicers
import { addTodo, updateTodo } from '../../redux/slices/todoSlice'

// Styles
import './todo-modal.styles.scss'

const dropInVariant = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },

  visible: {
    transform: 'scale(1)',
    opacity: 1,

    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },

  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
}

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
          return
        }
      }
      setModalOpen(false)
    }
  }

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className='modal-wrapper'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='modal-container'
            variants={dropInVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <motion.div
              className='modal-closebtn'
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
