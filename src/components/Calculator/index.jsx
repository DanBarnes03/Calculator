import React, { useState } from 'react';
import './index.css'

export const Calculator = () => {
    
    const [value, setValue]  = useState('') 
    let prevValue;

    const addNum = (e) => {
        prevValue = value
        setValue (prevValue + e.target.innerHTML)
    }

    const operator = (e) => {
        prevValue =  value
        setValue (`${prevValue} ${e.target.innerHTML} `)
    }

    const clear = () => {
        setValue ('')
    }

    const del = () => {
        prevValue ('')
    }

    const sum = () => {
        let sumArray = value.split(' ')
        if(sumArray[1] === '+') {
            setValue(parseFloat(sumArray[0]) + parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === '-') {
            setValue(parseFloat(sumArray[0]) - parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === 'x') {
            setValue(parseFloat(sumArray[0]) * parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === '÷') {
            setValue(parseFloat(sumArray[0]) / parseFloat(sumArray[2]))
        }
        else {
            alert('Syntax Error')
        }
    }

    return(
        <div className='calculator-grid'>
            <div className='output'>
                <input className='textBox' type='text' value={value}/>
            </div>
            <button className='span-two' onClick={clear}>AC</button>
            <button onClick={del}>DEL</button>
            <button onClick={operator}>÷</button>
            <button onClick={addNum}>1</button>
            <button onClick={addNum}>2</button>
            <button onClick={addNum}>3</button>
            <button onClick={operator}>x</button>
            <button onClick={addNum}>4</button>
            <button onClick={addNum}>5</button>
            <button onClick={addNum}>6</button>
            <button onClick={operator}>+</button>
            <button onClick={addNum}>7</button>
            <button onClick={addNum}>8</button>
            <button onClick={addNum}>9</button>
            <button onClick={operator}>-</button>
            <button onClick={addNum}>.</button>
            <button onClick={addNum}>0</button>
            <button className='span-two' onClick={sum}>=</button>
        </div>
    )
};