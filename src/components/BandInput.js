import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    })
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default BandInput;
