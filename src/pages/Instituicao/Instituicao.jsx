import { Titulo } from "../../styles/style";
import { useParams } from 'react-router-dom';

export default function Instituicao() {
    const { instituicao } = useParams()
    return (
        <Titulo>Instituição: {instituicao}</Titulo>
    )
}