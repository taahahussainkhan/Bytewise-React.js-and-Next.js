import './App.css';
import React,{useState} from 'react'
import Profile from './Profile';
import Properties from './Properties';
function App() {
  const [name,updateName]=useState('Taaha');
  return (
    <div className='App'>
      <Profile 
      />
      <Properties name={name}/>
      <button onClick={()=>updateName('THK')}>Update</button>
      <button onClick={()=>updateName('Taaha')}>Revert</button>
    </div>
  );
}

export default App;
