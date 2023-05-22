import React from 'react'

// Styles
import './title.styles.scss'

export const TitleComponent = ({ children, ...rest }) => {
  return (
    <p className='title' {...rest}>
      {children}
    </p>
  )
}
