import React, { Component } from 'react'

export default class PropsClassComponent extends Component {
    state={
        name:"guru",
        age:"18"
    }
    changeCollege=()=>{
        if(this.state.name=='guru'){        //USING IF ELSE 
            this.setState({
                name:'gurucharan'
            })
        }
        else{
            this.setState({
                name:'guru'
            })
        }
    }
  render() {
    return (
      <div>
        <h1>
            I am {this.state.name} and I am {this.state.age}
        </h1>
        <button onClick={this.changeCollege}>Click</button>
      </div>
    )
  }
}