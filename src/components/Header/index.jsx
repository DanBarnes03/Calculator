import React from 'react';
import './index.css';

export const Header = () => {
    return(
        <header>
            <div className='leftSide'>
                <h1 className='title'>Calculator</h1>
            </div>
            <div className='rightSide'>
                <img src='https://icones.pro/wp-content/uploads/2021/06/icone-de-la-calculatrice-noir.png' alt='calculator' className='calculator'/>
            </div>
        </header>
    )
}