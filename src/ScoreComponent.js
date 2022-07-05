import React, {useState} from "react";

const getinitialScores = () => Math.trunc(Math.random() * 1000000)

function ScoreComponent() {
  let [score = getinitialScores(), setScore] = useState(); //state for score

  const inc = () => setScore(score + 1);  //increment score function
  const dec = () => setScore(score - 1);  //decrement score function

  return (
    <div>
    <h2>Score Inc: {score}</h2>
    <button className='btn btn-success' onClick={inc}>Add</button>
    <button className='btn btn-danger' onClick={dec}>Remove</button>
    </div>
  );
}

export default ScoreComponent;