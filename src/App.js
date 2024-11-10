import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
    const [showResult, setShowResult] = useState(false);

    const handleSubmit = () => {
        setShowResult(true);
    };

    return (
        <div className="App">
            {showResult ? (
                <div></div>
            ) : (
                <Quiz onSubmit={handleSubmit} />
            )}
        </div>
    );
}

export default App;