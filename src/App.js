import './App.css';
import React from 'react';
import ScoreComponent from './ScoreComponent.js';
import MyComponentOne from './MyComponent';
import MouseListener from './MouseListenerComponent';

function App() {
  return (
    <div>
      <h1>My Counter</h1>
      <hr />  
      <ScoreComponent />
      <hr />
      <MouseListener />
      <hr />
      <MyComponentOne />

    </div>
    
  )
}

export default App;
