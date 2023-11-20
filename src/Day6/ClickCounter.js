import React, { Component } from 'react'
import EnComponents from './EnComponents'

class ClickCounter extends Component() {
  render (){
    return (
    <div>
      <button onClick={this.props.inc}>touch meee!!{this.props.count}</button>
    </div>
  )
    }
}

export default EnComponents(ClickCounter)