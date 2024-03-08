import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Executa a função de logout
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
