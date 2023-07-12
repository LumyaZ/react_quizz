import React, { useState } from 'react';
import './form_inscription.css';

function FormInscription() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirm_email: '',
    password: ''
  });

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
          window.location.replace('/');
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
                  <input type='text' placeholder='Name' name='name'className='input_conn' style={{ marginTop:'10%' }} onChange={form}></input>
                  <input type='email' placeholder='Email' name='email' className='input_conn' onChange={form}></input>
                  <input type='email' placeholder='Confirm email' name='confirm_email' className='input_conn' onChange={form}></input>
                  <input type='password' placeholder='Password' name='password' className='input_conn' onChange={form}></input>
                  <button className='btn_conn'>Envoyer</button>
              </form>
          </div>
      </div>
   </div>
  );
}

export default FormInscription;