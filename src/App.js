// Components
import { AppHeaderComponent } from './components/header-component/header.component'
import { TitleComponent } from './components/title-component/title.component'

// Styles
import './styles/GlobalStyles.css'
import './app.styles.scss'

export const App = () => {
  return (
    <div className='container'>
      <TitleComponent>TODO LIST</TitleComponent>
      <div className='app__wrapper'>
        <AppHeaderComponent></AppHeaderComponent>
      </div>
    </div>
  )
}
