import './assets/App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="site">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
