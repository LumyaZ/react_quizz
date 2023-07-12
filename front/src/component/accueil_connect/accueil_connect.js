import React from 'react';
import './accueil_connect.css';

function AccueilConnect() {

    const deconnexion = () => {
        const confirmed = window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?');
        if (confirmed) {
            window.location.href = '/';
        } else {
            return;
        }
    };

    const editer = () => {
        window.location.href = '/edition';

    };

    return (

        <div className='presentation_container'>
            <div className='overlay'>
                <div className='content'>
                    <h3 className='title_quizz'>Sports Quiz</h3>
                    <a href='/choice-category' className='start_btn'>Commencer le quizz</a>
                    <div className='footer_btn_container'>
                        <button onClick={deconnexion} className='footer_btn'>Se déconnecter</button>
                    </div>
                    <div className='footer_btn_container'>
                        <button onClick={editer} className='footer_btn'>Editer</button>
                    </div>
                </div>
            </div>
        </div>
        );
  }

  export default AccueilConnect;