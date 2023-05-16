import React from 'react';
import AnimalTradingCards from "./Components/AnimalTradingCards.jsx";
import TestYourKnowledge from "./Components/TestYourKnowledge.jsx";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <div className={'App'}>
            <div className="container mx-auto">
                <div className="main mt-20 space-y-5">
                    <div className="links space-x-3">
                        <a href="https://uzbekcoders.uz" className='bg-sky-400 px-5 py-2 text-white font-semibold'>UzbekCoders</a>
                        <a href="https://challenge.udacity.com/enroll/khawarizmicoders?nd_key=nd004-1mac-v2" className='bg-sky-400 px-5 py-2 text-white font-semibold' target={'_blank'}>Udacity</a>
                    </div>
                    <hr/>
                    <AnimalTradingCards />
                    <hr/>
                    <TestYourKnowledge />
                </div>
            </div>
        </div>
    );
};

export default App;