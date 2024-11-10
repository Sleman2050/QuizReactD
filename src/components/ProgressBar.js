import React from 'react';
import './progressBar.css';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
    
    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="container">

            <div

                className="progressBar"

                style={{ width: `${progress}%` }}

            />

            <p>{`${currentQuestion} / ${totalQuestions}`}</p>

        </div>
    );
};

export default ProgressBar;