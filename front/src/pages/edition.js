import './../App.css'
import Footerback from '../component/footer_back/footer_back';
import FormConnexion from '../component/form_connexion/form_connexion';

function Edition() {
  localStorage.setItem('id', 0);

  return (
    <div className="App">
      <FormConnexion></FormConnexion>
      <Footerback></Footerback>
   </div>
   
  );
}

export default Edition;
