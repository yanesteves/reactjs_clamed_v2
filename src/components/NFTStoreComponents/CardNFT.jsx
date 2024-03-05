/* eslint-disable react/prop-types */

export default function CardNFT({ nft }) {
    return (
        <div className="card-nft">
            {/* img, nickname, img do perfil, preco, precoreal */}
            <div className="nft-card-header">
                <div className="nft-user">
                    <img src={nft.foto_perfil}></img>
                    {nft.nome}
                    <span className="nickuser">{nft.nickcriador}</span>
                </div>
            </div>

            <div className="nft-card-content">
                <img src={nft.imagem}></img>
            </div>

            <div className="nft-card-footer">
                <div className="nft-time">
                    <span>3 dias restantes</span>
                </div>
                <div className="nft-price">
                    <span className="real">(R$ {nft.precoreal})</span>
                    {nft.preco} ETH
                </div>
            </div>
        </div>
    )
}