import React from 'react';
import Code from "./Code.jsx";
import {CODE3, CODE4, CODE5, CODE6} from "../consts.js";

const TestYourKnowledge = () => {
    return (
        <div className='TestYourKnowledge'>
            <h1 className='text-2xl'>Test Your Knowledge</h1>
            <div className="grid grid-cols-4">
                <Code code={CODE3} url='https://cdna.artstation.com/p/assets/images/images/051/677/778/large/alexey-1.jpg?1657889349' text='#1'/>
                <Code code={CODE4} url='https://cdna.artstation.com/p/assets/images/images/051/677/778/large/alexey-1.jpg?1657889349' text='#2'/>
                <Code code={CODE5} url='https://cdna.artstation.com/p/assets/images/images/051/677/778/large/alexey-1.jpg?1657889349' text='#3'/>
                <Code code={CODE6} url='https://cdna.artstation.com/p/assets/images/images/051/677/778/large/alexey-1.jpg?1657889349' text='#4'/>
            </div>
        </div>
    );
};

export default TestYourKnowledge;