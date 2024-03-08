import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login/Login.jsx';
import NFTStore from '../pages/NFTStore/NFTStore.jsx';
import NotFoundPage from '../pages/NotFound/NotFound.jsx';
import Instituicao from '../pages/Instituicao/Instituicao.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function RoutesComponent() {

    const { isAuthenticated } = useAuth()
    
    const loginRedirect = (children) => {
        console.log('isAuth', isAuthenticated)
        if (isAuthenticated) {
            // Usuário está logado, redirecionar para a dashboard ou outra rota
            return <Navigate to="/" replace />;
        }

        // Usuário não está logado, renderizar children (LoginPage)
        return children;
    }

    return (
        <Routes>

            {/* "Protegendo" a rota /login para que eu não consiga acessar quando tiver conectado. */}
            <Route path='/login' element={
                loginRedirect(<LoginPage />)
            } />
            {/* <Route path='/login' Component={LoginPage} /> */}

            {/* Protegendo as rotas internas e redirecionando o usuário para login caso não esteja conectado. */}
            {isAuthenticated ? (
                <>
                    <Route path='/nft-store' Component={NFTStore} />
                    <Route path='/instituicao/:instituicao' Component={Instituicao} />
                    <Route path='/' exact Component={Dashboard} />
                </>
            ) : (
                <Route path="*" element={<Navigate replace to="/login" />} />
            )}

            {/* Rota específica para a página de erro 404 */}
            <Route path="/404" Component={NotFoundPage} />
            {/* Captura qualquer rota não correspondente e redireciona para /404 */}
            {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
            <Route path="*" element={<Navigate replace to={isAuthenticated ? "/404" : "/login"} />} />

        </Routes>
    )
} 