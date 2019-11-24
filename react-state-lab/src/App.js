import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      currentIncrement: 1
    }
  }
  
  handleClick = () => {
    let counter = this.state.counter;
    let currentIncrement = this.state.currentIncrement;
    this.setState({
      counter: counter + currentIncrement
    });
  }

  handlePayment = () => {
    let counter = this.state.counter;
    let currentIncrement = this.state.currentIncrement;
    if (counter >= 10) {
      this.setState({
        counter: counter - 10,
        currentIncrement: currentIncrement + 1
      });
    } else {
      window.alert('You cannot afford that')
    }
  }

  resetGame = () => {
    this.setState ({
      counter: 0,
      currentIncrement: 1
    })
  }

  render = () => {
    let counter = this.state.counter;
    let currentIncrement = this.state.currentIncrement;
    let resetGame = this
    if (counter >= 100){
      return (
        <div className="App">
            <h1>Current Score: {counter}</h1>
            <h1>You Win!</h1>
            <button onClick={this.resetGame}>Reset</button>
        </div>
      );
    } else {
      return (
        <div className="App">
            <h1>Current Score: {counter}</h1>
            <button onClick={this.handleClick}>+{currentIncrement}</button>
            <button onClick={this.handlePayment}>Pay 10 points to change from +{currentIncrement} to +{currentIncrement + 1}</button>
        </div>
      );
    }
    
  }
}

export default App;
