import React, { useState } from 'react';
import './form_connexion.css';

function FormConnexion() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [ErrorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  const FormSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          setErrorMessage("");
          localStorage.setItem("user", JSON.stringify(user));
          window.location.replace('/homeConnect');
        } else {
          setErrorMessage("Identifiants incorrectes");
        }
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error(
          "Erreur  :",
          error
        );
      });
  };

  const form = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    
    <div className='form_connexion'>
      <div className='overlay'>
          <div className='content'>
              <h3 className='title_connexion'>Veuillez vous connecter :</h3>
              <form onSubmit={FormSubmit} className='form'>
                  <input type='email' placeholder='Email' name='email' className='input_conn' onChange={form} ></input>
                  <input type='password' placeholder='Password' name='password' className='input_conn' onChange={form}></input>
                  <button type='submit' className='btn_conn' href='/homeConnect'>Se connecter</button>
              </form>
          </div>
      </div>
  </div>
  );
}

export default FormConnexion;