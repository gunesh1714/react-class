import React, { Component } from 'react'

export default class PropsClassComponent extends Component {
    constructor(){
        super();
        this.state={
            name:'guru',age:'18'
        }
    }
    changeCollege=()=>{
        this.setState({
            name:'gurucharan'
        })
    }
  render() {
    return (
      <div>
        <h1>
            I am {this.state.name} and I am {this.state.age}
        </h1>
        <button onClick={this.changeCollege.bind(this)}>Click</button>
      </div>
    )
  }
}