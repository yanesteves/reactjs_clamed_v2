import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import NFTStore from '../pages/NFTStore/NFTStore.jsx';
import Instituicao from '../pages/Instituicao/Instituicao.jsx'
import Login from '../pages/Login/Login.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function RoutesComponent() {

    const { isAuthenticated } = useAuth()

    const loginRedirect = (children) => {
        if (isAuthenticated) {
            return <Navigate to='/nft-store' replace />
        }

        return children
    }

    return (
        // isAuthenticated
        <Routes>
            {/* <Route path='/login' Component={Login} /> */}

            <Route path='/login' element={
                loginRedirect(<Login />)
            }/>
            
            {isAuthenticated ? (
                <>
                    <Route path='nft-store' Component={NFTStore} />
                    <Route path='/instituicao/:instituicao' Component={Instituicao}/>
                </>
            ) : (
                <Route path='*' element={<Navigate replace to='/login' />} />
            )}
            
            {/* /nao-existente */}            
            {/* <Route path='*' Component={App} /> */}
        </Routes>
    )
} 