import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx'
import RoutesComponent from './routes/Routes.jsx'
import './index.css'
import { MenuComponent } from './components/OtherComponents/MenuComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <MenuComponent />
        <RoutesComponent />        
      </Router>      
    </ThemeProvider>
  </React.StrictMode>,
)
