import {React, useState} from 'react'
import './Cell.css'
const Cell = (props) => {

    const [html, setHtml] = useState('')
    const html_x = 'X'
    const html_o = 'O'

    const htmlHandler = () => {
        if (html === '') {
            if (props.turn % 2 === 0) {
                setHtml(html_x)
                console.log(props.id)
                props.updateTurn(Number(props.id), 'X')               
            }
            else if (props.turn % 2 === 1) {
                setHtml(html_o)
                console.log(props.id)
                props.updateTurn(Number(props.id), 'O')                               
            }
        }         
    }
    
    
    

    return (
        <div>
            <p className='cell' onClick={htmlHandler} value={html}>{html}</p>
        </div>
    )
}

export default Cell
