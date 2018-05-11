import React, { Component } from 'react';

class BandInput extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      text: ''
	    };
	  }

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.props.store)
		this.props.store.dispatch({
			type: 'ADD_BAND',
			band: this.state.text
		})
		this.setState({
			text: ''
		})

	}

	render() {
		return(
		  <div>
		    <form onSubmit={(event) => this.handleSubmit(event)}>
		      <p>
		        <label>add band</label>
		        <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
		      </p>
		      <input type="submit" />
		    </form>
		  </div>
		);
	}
};

export default BandInput;
