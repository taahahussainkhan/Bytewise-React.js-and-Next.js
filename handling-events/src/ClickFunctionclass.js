import React, { Component } from 'react'

export default class 
 extends Component {
    display(){
        // It is event
        //Don't use function keyword when in class.
            alert("Taaha hussain Khan")
    }
  render() {
    return (
      <div className='App'>
          <input type="button" value="click" onClick={this.display}/> 
        {/* Don't use parenthesis when calling funtion for event handling. */}
      </div>
    )
  }
}
