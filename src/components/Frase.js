import React from 'react'
import styled from '@emotion/styled'



const ContenedorFrase = styled.div`

margin-top:15rem;
padding:3rem;
background-color:#fff;
max-width:800px;
border:1px solid black;
border-radius:0.5rem;


`;

const Author = styled.p`

padding:1rem 0rem;
text-align:end;
color:green;
font-size:1.2rem;
font-weigth

`;

const Frase = ({frase}) => {
    return (
        
        <ContenedorFrase>

            <h1>{frase.quote}</h1>
            <Author>-{frase.author}</Author>

        </ContenedorFrase>
            
        
    )
}

export default Frase
