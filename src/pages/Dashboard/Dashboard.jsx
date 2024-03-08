import { useEffect, useState, useRef } from "react"
import { fetchData } from "../../services/api"
import { Titulo, MenuContainer, MenuItem } from '../../styles/style'
import '../../App.css'
import reactLogo from '../../assets/react.svg';
// import viteLogo from '../../../vite.svg'

export default function Dashboard() {

    useEffect(() => {
        fetchData()
            .then(data => console.log('dado recebido'))
            .catch(err => console.err(err))
    }, [])
    const inputElement = useRef(null)

    useEffect(() => {
        inputElement.current.focus()
    }, [])

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Services' },
        { id: 3, name: 'Products' },
        { id: 4, name: 'Contact' }
    ]
    const [activeItem, setActiveItem] = useState(2)

    const [termo, setTermo] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (termo == '') {
            return;
        }

        // const res = fetchData(termo)
        // if (res) {
        //   setUsers(res.items)
        // }

        fetch(`https://api.github.com/search/users?q=${termo}`)
            .then(response => response.json())
            .then(users => {
                if (users?.items) {
                    setUsers(users.items)
                }
            })


    }, [termo])


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <Titulo customProperty='true'>Vite + React</Titulo>

            <div style={{ 'margin': '20px' }}>
                <input ref={inputElement} value={termo} onChange={(e) => setTermo(e.target.value)} placeholder='Digite o nome do usuário...'></input>
                <h2>Usuários Github</h2>
                {users.map(user => (
                    <div key={user.id} className='github-card'>
                        <img src={user.avatar_url}></img>

                        <div className='github-user-info'>
                            <span>{user.login}</span>
                            <span>{user.html_url}</span>
                        </div>
                    </div>
                ))}
            </div>

            <MenuContainer>
                {menuItems.map(item => (
                    <MenuItem
                        key={item.id}
                        isActive={activeItem === item.id}
                        onClick={() => setActiveItem(item.id)}>
                        {item.name}
                    </MenuItem>
                ))}
            </MenuContainer>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}