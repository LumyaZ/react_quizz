import FormInscription from '../component/form_inscription/form_inscription';
import Footerback from '../component/footer_back/footer_back';

import './../App.css'
function Inscription() {
  return (
    <div className="App">
      <FormInscription></FormInscription>
      <Footerback></Footerback>
   </div>
  );
}

export default Inscription;
