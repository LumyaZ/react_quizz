import ChooseCategorie from '../component/affiche_categorie/affiche_categorie';
import Footerback from '../component/footer_back/footer_back';
import './../App.css'
function CategorieQuizz() {
  return (
    <div className='presentation_container'>
      <div className='overlay'>
        <div className='content'>
          <span className='title_connexion'>Choississez votre categorie de quizz</span>
          <div className="listCategoie">
              <ChooseCategorie></ChooseCategorie>
          </div>
        </div>  
      </div>
    <Footerback></Footerback>
   </div>
   
  );
}

export default CategorieQuizz;
