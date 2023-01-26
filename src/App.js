import './assets/App.css';
import Header from './components/Header';
import Deck from './components/Deck';
import { Component } from 'react';

function App() {
    return (
      <div className="site">
        <Header/>
        <Deck/>
      </div>
    );
}

export default App;
