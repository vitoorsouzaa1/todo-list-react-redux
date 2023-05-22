import React from 'react'

// Styles
import './button.styles.scss'

export const ButtonComponent = ({ children, type, variant, ...rest }) => {
  return (
    <button
      className={
        variant === 'primary'
          ? 'button button-primary'
          : variant === 'secondary'
          ? 'button button-secondary'
          : null
      }
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  )
}

export const Selector = ({ children, id, ...rest }) => {
  return (
    <select className='button button__select' {...rest}>
      {children}
    </select>
  )
}
