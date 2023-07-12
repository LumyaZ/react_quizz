import React, { useState } from 'react';
import './form_connexion.css';

function FormConnexion() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { email, password } = formData;

        fetch("http://127.0.0.1:8000/api/users")
            .then((response) => response.json())
            .then((data) => {
                const user = data.find(
                    (user) => user.email === email && user.password === password
                );
                if (user) {
                    setErrorMessage("");
                    localStorage.setItem("user", JSON.stringify(user));
                    console.log('ok')
                    window.location.replace('/homeConnect');

                } else {
                    setErrorMessage("Identifiants incorrects");
                }
                setFormData({ email: "", password: "" });
            })
            .catch((error) => {
                console.error("Erreur :", error);
            });
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div className='form_connexion'>
            <div className='overlay'>
                <div className='content'>
                    <h3 className='title_connexion'>Veuillez vous connecter :</h3>
                    <form onSubmit={handleFormSubmit} className='form'>
                        <input type='email' placeholder='Email' name='email' className='input_conn' onChange={handleChange}/>
                        <input type='password' placeholder='Password' name='password' className='input_conn' onChange={handleChange}/>
                        <button type='submit' className='btn_conn' href='/homeConnect'>
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormConnexion;