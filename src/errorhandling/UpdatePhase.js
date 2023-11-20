import React, { Component } from 'react'

export default class UpdatePhase extends Component {
    state={color:"Yellow"}
    shouldComponentUpdate(){    //DETERMINES WHETHER DO UPDATE OR NOT
        return true;
    }
    componentDidMount(){    //UPDATE AFTER TIMER
        setTimeout(()=>{
            this.setState({
                color:"Blue"
            })
        },3000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){   //SHOW VALUE BEFORE UPDATE
        document.getElementById("i").innerHTML="value"+prevState.color;
    }
    componentDidUpdate(){   //SHOW VALUE AFTER UPDATE
        document.getElementById("ii").innerHTML="value"+this.state.color;
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
        <p id="ii"></p>
      </div>
    )
  }
}
