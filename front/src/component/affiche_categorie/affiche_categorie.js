import React, { useState, useEffect } from 'react';
import './affiche_categorie.css';

function ChooseCategorie() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);
  console.log(categories)
  
  return (
    <div className="categorie">
        <ul>
            {categories.map(category => (
            <li key={category.id}>
                <div className='btn_categorie'><a href={`/quizz/${category.categorie}`} className='categorie_href'>{category.categorie}</a></div>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default ChooseCategorie;