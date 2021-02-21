import React from 'react'
import './Button.css'

/*OUTRA FORMA DE PRODUZIR SEM USAR O REACT*/  

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
//Forma de fazer o conteudo no REACT
 /* export default props => 
<button className={`
    button
    ${props.operation ? 'operaton' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
`}>
    {props.label}
    </button> 
 */
