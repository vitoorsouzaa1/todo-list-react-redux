import React from 'react'

// Styles
import './header.styles.scss'

// Components
import { ButtonComponent, Selector } from '../button-component/button.component'
import { TodoModalComponent } from '../todo-modal-component/todo-modal.component'

export const AppHeaderComponent = () => {
  return (
    <div className='app-header'>
      <ButtonComponent variant='primary'>Click Me</ButtonComponent>
      <Selector id='status'>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>Complete</option>
      </Selector>
      <TodoModalComponent />
    </div>
  )
}
