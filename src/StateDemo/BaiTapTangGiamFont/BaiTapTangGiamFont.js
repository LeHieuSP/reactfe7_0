import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {
  
  state = {
      fontSize: 17
  }
  
  
  tangGiamFont = (fSzie) => {
      this.setState({
    fontSize: this.state.fontSize + fSzie
          
      })
  }
  
  
  
    render() {
    return (
      <div className='container'>
          <h3 style={{fontSize:`${this.state.fontSize}px`}}>Bài tập tăng giảm font</h3>
          <button className='btn btn-outline-primary' onClick={() => {
              this.tangGiamFont(1);
          }}>+</button>
          <button className='btn btn-outline-primary ml-2' onClick={() => {
              this.tangGiamFont(-1);
          }}>-</button>
          
          </div>
    )
  }
}
