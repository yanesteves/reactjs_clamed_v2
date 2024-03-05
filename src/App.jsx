import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardApp from './components/CardApp'
import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('Senai')

  const [lista, setLista] = useState([])
  const [base, setBase] = useState([{ nome: 'Celular', categoria: 'celular'}])
  const [categorias, setCategorias] = useState('all')

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    if (categorias === 'all') {
      setLista(base)
    }

    if (categorias === 'celulares') {
      setLista(base.filter(item => item.categoria === 'celular'))
    }
  }, [categorias])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React - {text}</h1>
      
      <CardApp />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
