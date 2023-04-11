import React from 'react'
import './App.css';
export default function Clickhandle() {
    function display(){
        // It is event
            alert("Taaha hussain Khan")
    }
  return (
    <div className='App'>
        <input type="button" value="click" onClick={display}/> 
        {/* Don't use parenthesis when calling funtion for event handling. */}
    </div>
  )
}
