import React, {useState, useEffect} from 'react'
import './ToDoList.css';

export const ToDoList = () => {

    const [input, setInput] = useState('')
    const [completed, setCompleted] = useState(true)
    const [printList, setprintList] = useState(['eggs', 'something']);

    const onClick = (e) => {
        if(input != ''){
        handleInput(input)
        }
    }

    const handleInput = (input) => {
        setprintList([...printList, input])
        console.log(printList)
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked!')
        setCompleted(true);
    }

  return (
    <div>
    <input id="add" type="search" value={input} onInput={e => setInput(e.target.value)} placeholder='Type your to do item here'></input>
    <button onClick={e => onClick(e)}> Click to Add </button>
    <div>
    <div className='List'> Today:</div>
    <div className="list-items"> {printList.map(item => {
        return (
            <div className="list-item" onClick={e => handleClick(e)}>
            <h3>🍄</h3>
            <div className="item"> {item} </div>
            </div>
        )
    })} 
    </div>
    </div>
    </div>
  )
}
