import React, { Component } from 'react'

export default class PropsClassComponent extends Component {
    state={
        count:0
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>
            This is {this.state.count} 
        </h1>
        <button onClick={this.increment}>Click</button>
      </div>
    )
  }
}