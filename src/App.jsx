import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { MenuComponent } from './components/OtherComponents/MenuComponent.jsx';
import { useAuth } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx'
import RoutesComponent from './routes/Routes.jsx'

function App() {
  const { isAuthenticated } = useAuth();

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
