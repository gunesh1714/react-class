import React, { Component } from 'react'

export default class StateComponent extends Component {
    state={
        name:'guru',
        age:'18'
    }
    render() {
    return (
      <div>
        <h1>I am {this.state.name} and I am {this.state.age}</h1>
      </div>
    )
  }
}
