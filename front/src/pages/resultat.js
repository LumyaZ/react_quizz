import Footerback from "../component/footer_back/footer_back";

function Resultat() {
  const score = localStorage.getItem('score');
    return (
      <div className='presentation_container'>
        <div className='overlay'>
          <div className='content'>
            <h4 className='fin_quizz'>Vous avez terminé le jeu !</h4>
            <h6 className='fin_score'>Votre score final est de {score}</h6>
          </div>
        </div>
        <Footerback></Footerback>
     </div>
    );
  }
  
  export default Resultat;