import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    return (
      <div className="boxColor" style={{backgroundColor:'#'+randomColor, width:500,height:300}}>
        Hola, cambio de color.
      </div>
    );
  }
}

export default App;
