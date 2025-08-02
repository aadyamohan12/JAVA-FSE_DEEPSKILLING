
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const euroRate = 0.011;
    const euros = (this.state.rupees * euroRate).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR ➜ Euro)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in ₹"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euros && (
          <p>€ {this.state.euros}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
