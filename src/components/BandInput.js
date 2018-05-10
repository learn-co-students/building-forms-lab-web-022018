import React, { Component } from 'react';

class BandInput extends Component {
  state={
    text: ""
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    })
    // this.setState({
    //   text: ""
    // })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={event=>this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
