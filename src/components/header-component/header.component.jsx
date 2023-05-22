import React, { useState } from 'react'

// Styles
import './header.styles.scss'

// Components
import { ButtonComponent, Selector } from '../button-component/button.component'
import { TodoModalComponent } from '../todo-modal-component/todo-modal.component'

export const AppHeaderComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='app-header'>
      <ButtonComponent variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </ButtonComponent>
      <Selector id='status'>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </Selector>
      <TodoModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}
