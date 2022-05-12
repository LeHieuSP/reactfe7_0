import React, { Component } from 'react'

export default class HandlingEvent extends Component {
  
  handleSayHello = () => {
      console.log('hello');
  };
  
  handleSayName = (name) => {
      console.log('hi ' + name);
  };



    render() {
    return (
      <div>
          <button onClick = {this.handleSayHello}>Say hello</button>

          <button style={{marginLeft : '5px',}} onClick={() => {
              this.handleSayName('Hiếu');
          }}>Hi + Name </button>
      </div>
    )
  }
}
