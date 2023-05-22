import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { App } from './App'

// Reducers & Slicers
import { TodoStore } from './redux/store/todoStore'

// Styles
import './styles/GlobalStyles.css'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={TodoStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
