import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { apiLogin } from '../../services/api'; // Importando a função simulada de API
import { Form } from '../../styles/style.jsx';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpar erros anteriores

    try {
      const response = await apiLogin(username, password); // Chamada simulada de API
      if (response.success) {
        login(response.user); // Passando os dados do usuário para a função de login
        navigate('/'); // Redirecionar para o Dashboard após login
      } else {
        setError('Authentication failed');
      }
    } catch (err) {
      console.log(err)
      setError(err.message || 'An unexpected error occurred');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
      {error && <p>{error}</p>}
    </div>
  );
}
