import React, { Component } from 'react';


class Bands extends Component {
  render(){
  	let bands = this.props.store.getState().bands.map(band => <li>{band}</li>)

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
