import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import ProgressBar from './ProgressBar'; 
import './Quiz.css';

const questions = [
    {
    questionText: 'Which team won the NBA Championship in 2024?',
    options: [
    { answerText: 'Denver Nuggets', isCorrect: false },
    { answerText: 'Miami Heat', isCorrect: false },
    { answerText: 'Golden State Warriors', isCorrect: false },
    { answerText: 'Boston Celtics', isCorrect: true },
    ],
    },
    {
    questionText: 'Which team won the NBA Championship in 2023?',
    options: [
    { answerText: 'Denver Nuggets', isCorrect: true },
    { answerText: 'Miami Heat', isCorrect: false },
    { answerText: 'Golden State Warriors', isCorrect: false },
    { answerText: 'Boston Celtics', isCorrect: false },
    ],
    },
    {
    questionText: 'Which team claimed the NBA title in 2022?',
    options: [
    { answerText: 'Golden State Warriors', isCorrect: true },
    { answerText: 'Boston Celtics', isCorrect: false },
    { answerText: 'Milwaukee Bucks', isCorrect: false },
    { answerText: 'Phoenix Suns', isCorrect: false },
    ],
    },
    {
    questionText: 'Which team won the NBA Championship in 2021?',
    options: [
    { answerText: 'Milwaukee Bucks', isCorrect: true },
    { answerText: 'Phoenix Suns', isCorrect: false },
    { answerText: 'Los Angeles Lakers', isCorrect: false },
    { answerText: 'Atlanta Hawks', isCorrect: false },
    ],
    },
    {
    questionText: 'Which team won the NBA title in 2020?',
    options: [
    { answerText: 'Los Angeles Lakers', isCorrect: true },
    { answerText: 'Miami Heat', isCorrect: false },
    { answerText: 'Toronto Raptors', isCorrect: false },
    { answerText: 'Boston Celtics', isCorrect: false },
    ],
    },
    {
    questionText: 'Which team was the runner-up in the NBA Finals in 2022?',
    options: [
    { answerText: 'Boston Celtics', isCorrect: true },
    { answerText: 'Golden State Warriors', isCorrect: false },
    { answerText: 'Miami Heat', isCorrect: false },
    { answerText: 'Milwaukee Bucks', isCorrect: false },
    ],
    },
    ];

function Quiz() {
    const totalQuestions = questions.length;
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120); 

    useEffect(() => {



        const timer = setInterval(() => {

            setTimeLeft(pr => {

                if (pr <= 1) {

                    clearInterval(timer);

                    handleSubmit(); 
                    
                    return 0;

                }
                return pr - 1;
            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const handleAnswerOptionClick = (questionIndex, isCorrect) => {

        const newAnswers = [...answers];

        newAnswers[questionIndex] = isCorrect;

        setAnswers(newAnswers);

      

        if (questionIndex < totalQuestions - 1) {

            setCurrentQuestionIndex(questionIndex + 1);

        } 
        
        else {
            
            handleSubmit();

        }
    };

    const handleSubmit = () => {

        const newScore = answers.filter(answer => answer === true).length;

        setScore(newScore);

        setShowResult(true);
    };

    return (

        <div className="quiz">

            <h2>{`Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}</h2>

            <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />

            {showResult ? (
                <Result score={score} totalQuestions={totalQuestions} />
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    questionIndex={currentQuestionIndex}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    selectedAnswer={answers[currentQuestionIndex]} 
                />
            )}

        </div>
    );
}

export default Quiz;