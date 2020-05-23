import React from 'react'
import { StyledFrase } from './StyledFrase'

const Frase = ({frase}) => {

    const {author, quote} = frase

    return (
        <StyledFrase>
            <h1>'{quote}'</h1>
            <br/>
            <p>-<i>{author}</i></p>
        </StyledFrase>
    )
}

export default Frase
