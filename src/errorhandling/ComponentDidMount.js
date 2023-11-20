import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    state={color:"Yellow"}
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                color:"Blue"
            })
        },3000)
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
      </div>
    )
  }
}
