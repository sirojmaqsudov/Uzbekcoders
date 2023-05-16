import React from 'react';
import Code from "./Code.jsx";
import {CODE1, CODE2} from "../consts.js";

const AnimalTradingCards = () => {
    return (
        <div className='AnimalTradingCards'>
            <h1 className='text-2xl'>Animal Trading Cards</h1>
            <div className="flex space-x-2 mt-2">
                <Code code={CODE1} url='https://wallpapercave.com/wp/wp11725637.png' text='HTML'/>
                <Code code={CODE2} url={'https://constructs.stampede-design.com/wp-content/uploads/2014/10/css3.jpg'} text='CSS'/>
            </div>
        </div>
    );
};

export default AnimalTradingCards;