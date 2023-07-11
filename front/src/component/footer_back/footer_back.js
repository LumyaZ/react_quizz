import React from 'react';
import './footer_back.css';
function Footerback() {

  const user = localStorage.getItem('user');

  const Back = () => {
    if (user === null || user === '0') {
      window.location.href = '/';
    } else {
      window.location.href = '/homeConnect';
    }
  };


  return (
    <footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <div className='footer_btn_back'>
        <a onClick={Back} className='footer_href_back' >Retour</a>
      </div>
    </footer>

  );
}

export default Footerback;