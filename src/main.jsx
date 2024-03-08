import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext.jsx'
// import RoutesComponent from './routes/Routes.jsx'
import './index.css'
// import { MenuComponent } from './components/OtherComponents/MenuComponent.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
