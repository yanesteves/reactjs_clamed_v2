import { Link } from 'react-router-dom'
import LogoutButton from './LogoutComponent'

export const MenuComponent = () => {
    return (
        <div>
            <button>
                <Link aria-label='Ir para home' to='/'>Home</Link>
            </button>
            <button>
                <Link aria-label='Ir para nft-store' to='/nft-store'>NFT Store</Link>
            </button>
            <button>
                <Link to='/instituicao/senai'>Senai</Link>
            </button>
            <button>
                <Link to='/instituicao/lab365'>LAB365</Link>
            </button>

            <LogoutButton></LogoutButton>
        </div>
    )
}