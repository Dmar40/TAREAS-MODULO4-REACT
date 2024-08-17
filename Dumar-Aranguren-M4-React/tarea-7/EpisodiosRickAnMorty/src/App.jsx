
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CharacterPage from './components/ChaPage/CharacterPage';
import EpisodesPage from './components/EpiPage/EpisodesPage';
import NotFoundPage from './components/NotPage/NotFoundPage';
import CharacterDetail from './components/CharDetail/CharacterDetail';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
