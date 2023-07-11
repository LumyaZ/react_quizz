import React, { useState } from 'react';
import './form_edition.css';

function FormEdition() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirm_email: '',
    password: ''
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        confirm_email: user.email || '', 
        password: ''
      });
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const form = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className='form_connexion'>
      <div className='overlay'>
          <div className='content'>
              <h3 className='title_connexion'>Veuillez inscrire votre compte :</h3>
              <form onSubmit={submit} className='form'>
                <input type='text' placeholder='Name' name='name' className='input_conn' style={{ marginTop: '10%' }} value={formData.name} onChange={form}></input>
                <input type='email' placeholder='Email' name='email' className='input_conn' value={formData.email} onChange={form}></input>
                <input type='email' placeholder='Confirm email' name='confirm_email' className='input_conn' value={formData.confirm_email} onChange={form}></input>
                <input type='password' placeholder='Password' name='password' className='input_conn' value={formData.password} onChange={form}></input>
                <button className='btn_conn'>Envoyer</button>
              </form>
          </div>
      </div>
   </div>
  );
}

export default FormEdition;