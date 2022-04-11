import './assets/App.css';
import Header from './components/Header';
import Deck from './components/Deck';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="site">
        <Header/>
        <Deck/>
      </div>
    );
  }
}

export default App;
