import {React, useState} from 'react'
import Cell from './Cell'
import './Board.css'

const Board = (props) => {
    const [turn, setTurn] = useState(0)

    const [board, setBoard] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: ''
    })
    const possible_wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const updateTurn = (id, value) => {
        
            board[id] = value
            setBoard({...board})
            console.log(board)
           
            for (let i = 0; i < 8; i++) {
                if (board[possible_wins[i][0]] === 'X' && board[possible_wins[i][1]] === 'X' && board[possible_wins[i][2]] === 'X') {
                    setTimeout(() => {alert('Player X wins!')}, 100) 
                }  
                else if (board[possible_wins[i][0]] === 'O' && board[possible_wins[i][1]] === 'O' && board[possible_wins[i][2]] === 'O') {
                    setTimeout(() => {alert('Player O wins!')}, 100)
                }              
                      
            }
            
        setTurn(turn => turn + 1)
    
    }

    const resetBoard = () => {
        setBoard({
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: ''
        })
       // need to actually update board tho 
    }
        
    return (
        <div>
        <div className='board'>
                 
            <Cell turn={turn} updateTurn={updateTurn} id={0}/>
            <Cell turn={turn} updateTurn={updateTurn} id={1}/>
            <Cell turn={turn} updateTurn={updateTurn} id={2}/>
            <Cell turn={turn} updateTurn={updateTurn} id={3}/>
            <Cell turn={turn} updateTurn={updateTurn} id={4}/>        
            <Cell turn={turn} updateTurn={updateTurn} id={5}/>
            <Cell turn={turn} updateTurn={updateTurn} id={6}/>
            <Cell turn={turn} updateTurn={updateTurn} id={7}/>
            <Cell turn={turn} updateTurn={updateTurn} id={8}/>
        
        
        </div>
            <button onClick={resetBoard}>Reset Board</button>
        </div>
    )
}

export default Board
