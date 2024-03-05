import styled from 'styled-components'

export const Titulo = styled.h1`
    
`

export const Span20 = styled.span`
    font-size: 20px;
`

export const Span16 = styled.span`
    font-size: 16px;
`

export const MenuContainer = styled.div`
    background-color: #f0f0f0;
    padding: 10px;
    width: 240px;
`

export const MenuItem = styled.div`
    cursor: pointer;    
    transition: 2s all ease;
    color: ${props => (props.isActive ? 'white' : 'black')};
    background-color: ${props => (props.isActive ? '#002bff' : 'transparent')};

    &:hover {
        color: white;
        background-color: #002bff;
    }
`