import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { ButtonComponent, Selector } from '../button-component/button.component'
import { TodoModalComponent } from '../todo-modal-component/todo-modal.component'

// Reducers & Slices
import { updateFilterStatus } from '../../redux/slices/todoSlice'

// Styles
import './header.styles.scss'

export const AppHeaderComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const dispatch = useDispatch()

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <div className='app-header'>
      <ButtonComponent variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </ButtonComponent>
      <Selector id='status' value={filterStatus} onChange={updateFilter}>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </Selector>
      <TodoModalComponent
        type='add'
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  )
}
