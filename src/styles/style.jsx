import styled from 'styled-components'

export const Titulo = styled.h1`
    color: ${props => props.customProperty === 'false' ? 'green' : 'pink'};
`

export const Span20 = styled.span`
    font-size: 20px;
`

export const Span16 = styled.span`
    font-size: 16px;
`