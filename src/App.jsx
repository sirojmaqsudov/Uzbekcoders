import React from 'react';
import AnimalTradingCards from "./Components/AnimalTradingCards.jsx";
import TestYourKnowledge from "./Components/TestYourKnowledge.jsx";

const App = () => {
    return (
        <div className={'App'}>
            <div className="container mx-auto">
                <div className="main mt-20 space-y-10">
                    <AnimalTradingCards />
                    <TestYourKnowledge />
                </div>
            </div>
        </div>
    );
};

export default App;