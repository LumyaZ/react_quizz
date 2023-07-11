import React from 'react';
import './presentation_quizz.css';

function Presentation() {
    return (
        <div className='presentation_container'>
            <div className='overlay'>
                <div className='content'>
                    <h3 className='title_quizz'>Sports Quiz</h3>
                    <a href='/choice-category' className='start_btn'>Commencer le quizz</a>
                    <div className='footer_btn_container'>
                        <a href='/connexion' className='footer_btn'>Connexion</a>
                        <a href='/inscription' className='footer_btn'>Inscription</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Presentation;