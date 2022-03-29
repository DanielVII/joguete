import './App.css';
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div class="site">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
