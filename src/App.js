import './App.css';
import React from 'react';
import ScoreComponent from './ScoreComponent.js';
import MyComponentOne from './MyComponent';

function App() {
  return (
    <div>
      <h1>My Counter</h1>
      <hr />  
      <ScoreComponent />
      <hr />
      <MyComponentOne />
      <hr />
    </div>
    
  )
}

export default App;
