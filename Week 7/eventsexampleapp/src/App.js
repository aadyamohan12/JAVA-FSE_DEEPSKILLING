
import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  }

  sayHello() {
    alert("Hello! You clicked the Increment button.");
  }

  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick(event) {
    alert("I was clicked! (Synthetic Event Triggered)");
  }

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Handling Example</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleClick}>Synthetic Event</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
