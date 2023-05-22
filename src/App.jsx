import React from 'react'
import { Toaster } from 'react-hot-toast'

// Components
import { AppHeaderComponent } from './components/header-component/header.component'
import { TitleComponent } from './components/title-component/title.component'
import { ContentComponent } from './components/content-component/content-component'

// Styles
import './styles/GlobalStyles.css'
import './app.styles.scss'

export const App = () => {
  return (
    <>
      <div className='container'>
        <TitleComponent>TODO LIST</TitleComponent>
        <div className='app__wrapper'>
          <AppHeaderComponent></AppHeaderComponent>
          <ContentComponent />
        </div>
      </div>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  )
}
