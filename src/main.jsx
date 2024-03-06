import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NFTStore from './pages/NFTStore/NFTStore.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NFTStore />
    </ThemeProvider>

    
    {/* <App /> */}
    {/* <NFTStore /> */}
    {/* <NFTStore /> */}
  </React.StrictMode>,
)
