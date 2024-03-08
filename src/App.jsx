
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useAuth } from './context/AuthContext'
import { MenuComponent } from './components/OtherComponents/MenuComponent'
import RoutesComponent from './routes/Routes'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <ThemeProvider>
        <Router>
          {isAuthenticated && <MenuComponent />}
          <RoutesComponent />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
