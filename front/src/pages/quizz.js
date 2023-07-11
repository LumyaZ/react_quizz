import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';


function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [answerDisabled, setAnswerDisabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  const { categorieName } = useParams();
  const [timer, setTimer] = useState(20);
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data.filter(question => question.categorie === categorieName)))
      .catch(error => console.error(error));
  }, [categorieName]);

  const generateRandomAnswers = useCallback((correctAnswer, incorrectAnswers) => {
    const answers = [...incorrectAnswers];
    const selectedIncorrectAnswers = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * answers.length);
      selectedIncorrectAnswers.push(answers.splice(randomIndex, 1)[0]);
    }
    answers.splice(Math.floor(Math.random() * 4), 0, correctAnswer);
    return answers;
  }, []);

  const generateCurrentQuestionAnswers = useCallback(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const answers = generateRandomAnswers(currentQuestion.reponse1, [
        currentQuestion.reponse2,
        currentQuestion.reponse3,
        currentQuestion.reponse4,
        currentQuestion.reponse5,
        currentQuestion.reponse6,
        currentQuestion.reponse7,
        currentQuestion.reponse8,
        currentQuestion.reponse9,
        currentQuestion.reponse10,
      ]).slice(0, 4);
      setCurrentQuestionAnswers(answers);
    }
  }, [questions, currentQuestionIndex, generateRandomAnswers]);

  useEffect(() => {
    setAnswerSelected(false);
    setAnswerDisabled(false);
    setTimer(20);
    generateCurrentQuestionAnswers();
  }, [currentQuestionIndex, generateCurrentQuestionAnswers]);

  const handleAnswerClick = useCallback((answer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion && answer === currentQuestion.reponse1) {
      setScore(prevScore => prevScore + 1);
      setIsAnswerCorrect(true);
      setIsAnswerIncorrect(false);
    } else {
      setIsAnswerCorrect(false);
      setIsAnswerIncorrect(true);
    }
    setAnswerSelected(true);
    setAnswerDisabled(true);
    setSelectedAnswer(answer);
  }, [questions, currentQuestionIndex]);

  useEffect(() => {
    if (timer > 0 && answerSelected === false) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timer === 0 && answerSelected === false) {
      handleAnswerClick(null); // Call handleAnswerClick with null as the answer to indicate that time is up
    }
  }, [timer, answerSelected, handleAnswerClick]);

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex === questions.length) {
      localStorage.setItem('score', score.toString());
      window.location.replace('/resultat');
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
      setAnswerSelected(false);
      setAnswerDisabled(false);
      setSelectedAnswer(null);
      setIsAnswerCorrect(false);
      setIsAnswerIncorrect(false);
      generateCurrentQuestionAnswers();
      setTimer(20);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div className='overlay'>
        <div className='content'>
          <span className='title_connexion'>Quizz de la catégorie {categorieName}</span>
          <div>
            <h2>Temps: {timer}</h2>
          </div>
          {currentQuestion && (
            <div key={currentQuestion.id}>
              <h4>{currentQuestion.question}</h4>
              <div>
                {currentQuestionAnswers.map(answer => (
                  <button
                    className={`btn_reponse ${
                      selectedAnswer === answer ? 'selected' : ''
                    } ${
                      selectedAnswer !== currentQuestion.reponse1 && answer === selectedAnswer && isAnswerIncorrect ? 'incorrect' : answer === currentQuestion.reponse1 && isAnswerIncorrect ? 'correct' : ''
                    } ${
                      selectedAnswer === answer && answer === currentQuestion.reponse1 && isAnswerCorrect ? 'correct' : ''
                    } ${
                      timer === 0 && answer === currentQuestion.reponse1 && !answerSelected ? 'correct-timer' : ''
                    }`}
                    onClick={() => handleAnswerClick(answer)}
                    key={answer}
                    disabled={answerDisabled}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
            )}
            {answerSelected && (
              <button onClick={nextQuestion} className='btn_conn'> Prochaine question </button>
            )}
            <br />
          <span>Votre score est de {score}</span>
        </div>
      </div>
    </div>
  );
}

export default Quizz;