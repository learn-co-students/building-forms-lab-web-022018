import React, { Component } from 'react';

class Bands extends Component {

  render(){
    console.log(this.props.store.getState())

    const bands = this.props.store.getState().bands.map(band=>{
      return (
        <div>
          <li>{band}</li>
        </div>
      )
    })

    return (
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
};

export default Bands;
