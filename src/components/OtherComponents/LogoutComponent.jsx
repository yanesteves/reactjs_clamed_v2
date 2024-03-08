import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function LogoutButton() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}