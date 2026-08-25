import { useState } from "react";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

function handleSetGood () {
  setGood(good + 1)
}

function handleSetNeutral () {
  setNeutral(neutral + 1)
}

function handleSetBad () {
  setBad(bad + 1)
}

  return (
    <>
      <header>
        <h1>give feedback</h1>
      </header>
      <div className="buttons">
        <Button name={"good"} value={handleSetGood} />
        <Button name={"neutral"} value={handleSetNeutral} />
        <Button name={"bad"} value={handleSetBad} />
      </div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {good / (good + neutral + bad) * 100} %</p>
    </>
  );
};

export default App;
