import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import CategorieQuizz from './pages/quizz_categorie';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import Quizz from './pages/quizz';
import Resultat from './pages/resultat';
import HomeConnect from './pages/home_connect';
import Edition from './pages/edition';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/choice-category' element={<CategorieQuizz/>}/>
          <Route path='/inscription' element={<Inscription/>}/>
          <Route path='/connexion' element={<Connexion/>}/>
          <Route path='/quizz/:categorieName' element={<Quizz/>}/>
          <Route path='/resultat' element={<Resultat/>}/>
          <Route path='/homeConnect' element={<HomeConnect/>}/>
          <Route path='/edition' element={<Edition/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
