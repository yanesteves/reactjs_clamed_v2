import { useContext, useEffect, useState } from "react"
import CardNFT from "../../components/NFTStoreComponents/CardNFT"
import { ThemeContext } from '../../context/ThemeContext.jsx'

export default function NFTStore() {
    let disponiveis = [
        {
            id: 0,
            nome: 'Pasti 2',
            criador: 'sonyart',
            nickcriador: '@sonyart.eth',
            foto_perfil: 'https://lh3.googleusercontent.com/EZMq0106S03X0DsKFdVO9TH2-kbE1zgwF_36i9k0vbqJmUZV_0p0iz1e1PX-nx19eULcbN0UB7NhcCnKyG1l_4FA1kJosLsWKb3S=s168',
            imagem: 'https://img.seadn.io/files/8008d4e396a7f32bdf7a58025a19d75e.jpg?fit=max&w=600',
            categoria: 'ilustracao',
            preco: 0.295,
            precoreal: '2524,97',
            liked: false,
            moeda: 'ETH'
        },
        {
            id: 1,
            nome: 'Opened Stash Box',
            criador: 'Snoop Dogg - B.O.D.R',
            foto_perfil: 'https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png',
            nickcriador: '@snoopdoggbodr',
            imagem: 'https://lh3.googleusercontent.com/OjKan_e5lUX4Dgaj61CUObNpS96ZWAT1eYCNh-5__L90_jyeLc8Iih1P_LY3-RJSl_kajSVeqO0BxHjdfk8CtgeRqBavzOBXYTO9KFM=w600',
            categoria: 'musica',
            preco: 1,
            precoreal: '8.559,22',
            liked: false,
            moeda: 'ETH'
        },
        {
            id: 2,
            nome: '2 Geez (Instrumental)',
            criador: 'Snoop Dogg - B.O.D.R',
            foto_perfil: 'https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png',
            nickcriador: '@snoopdoggbodr',
            imagem: 'https://lh3.googleusercontent.com/Q248R9pfAbkQlZKE8Xe1qXpj5MoX6W8e_0mljGdFaWpzajrG1xPkNWyCibkBCZKAVjSyE_ivw2vT0ItJPvKet57fy-hKBQ5AWkAI=w600',
            categoria: 'musica',
            preco: 1.25,
            precoreal: '10699,02',
            liked: false,
            moeda: 'ETH'
        },
        {
            id: 3,
            nome: 'Bored Ape Yacht Club #7369',
            criador: 'Bored Ape Yacht Club',
            foto_perfil: 'https://openseauserdata.com/files/3e7bcd3baad1c870e13fefae79633e13.png',
            nickcriador: '@franklinisbored',
            imagem: 'https://img.seadn.io/files/ef6bcb8f383c1f74c5f7ccc92b9b46e8.png?fit=max&w=600',
            categoria: 'ilustracao',
            preco: 76,
            precoreal: '650500,40',
            liked: false,
            moeda: 'ETH'
        },
    ]

    const { theme, toggleTheme }= useContext(ThemeContext)

    const [categoria, setCategoria] = useState('todos')
    // para receber os dados filtrados
    const [nfts, setNFTs] = useState(disponiveis)


    useEffect(() => {
        console.log('Tema atual: ', theme)
    }, [theme])

    useEffect(() => {
        // setNFTs(disponiveis)
    }, [])
    
    useEffect(() => {

        // if (!categoria) {
        //     return;
        // }

        // if (categoria === prevCategoria) {
        //     return;
        // }

        if (categoria === 'todos') {
            setNFTs(disponiveis)
            return;
        }

        setNFTs(disponiveis.filter(item => item.categoria === categoria))
        console.log('Categoria alterada')
    }, [categoria])

    return (
        <div className="nft-content">
            <div className="header-nft">
                <h4>NFT Store</h4>
                <div className="categorias-nfts">
                    {/* <nav></nav> */}
                    {/* <ul></ul> */}
                    <button onClick={() => setCategoria('todos')}>Todas</button>
                    <button onClick={() => setCategoria('ilustracao')}>Ilustração</button>
                    <button onClick={() => setCategoria('musica')}>Música</button>
                    <button onClick={() => setCategoria('games')}>Games</button>
                    <button onClick={toggleTheme}>Alterar Tema</button>
                </div>
            </div>        


            <div className="lista-nfts">
            {nfts.map(nft => {
                   return <CardNFT key={nft.id} nft={nft} />
                })}

                {nfts?.length === 0 && 'Não existem dados para mostrar.'}
            </div>
        </div>
    )
}