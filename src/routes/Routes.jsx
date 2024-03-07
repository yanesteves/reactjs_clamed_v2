import { Routes, Route } from 'react-router-dom';
import App from '../App';
import NFTStore from '../pages/NFTStore/NFTStore.jsx';
import Instituicao from '../pages/Instituicao/Instituicao.jsx'

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path='/' exact Component={App} />
            <Route path='nft-store' Component={NFTStore} />
            <Route path='/instituicao/:instituicao' Component={Instituicao}/>
            {/* /nao-existente */}
            <Route path='*' Component={App} />
        </Routes>
    )
} 