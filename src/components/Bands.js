import React, { Component } from 'react';

class Bands extends Component {

  render(){
      console.log(this.props.store.getState().bands);
      const bands = this.props.store.getState().bands.map( (band,index) => <li key={index}>{band}</li>)
    return (
      <div>
        band input here:
        {bands}
      </div>
    );
  }
};

export default Bands;
// You will need to write the Bands component.
// This component should display a ul
//   with a list element for each of the bands in the stores state.
//   Each list element should have text with the corresponding name of the band.
