import React, { Component } from 'react';

class BandInput extends Component {
  state = {text: ""}

  handleChange = (e)=>{
    this.setState({text: e.target.value},()=>{console.log("inner state");console.log(this.state)})}
  handleSubmit = (e)=>{
    e.preventDefault();
    // console.log("inside submit");
    // console.log(this.props.store);
    // console.log(this.props.store.dispatch);
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({text: ''})
  }
//Note: To have access to the store's dispatch method, we pass through the entire store as a prop.

  render() {
    return (
      <div>
        bands component
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="BandInput">BandInput</label>
            <input type="text" value={this.state.text}  onChange={this.handleChange}/>
          </p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;

// The component should have a form
//   text input
//   submit button.
// update the component state
//   each time the user types a new character in the input.
//   only update the stores state
//     when the user hits the submit button.
//
// Note: To have access to the stores dispatch method, we pass through the entire store as a prop.
