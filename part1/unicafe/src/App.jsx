import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} updater={setGood} />
      <Button text={"neutral"} updater={setNeutral} />
      <Button text={"bad"} updater={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total;

  return (
    <>
      <h2>statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>
                <StatisticLine text={"good"} value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"neutral"} value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"bad"} value={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"all"} value={total} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"average"} value={average} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"positive"} value={positive} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

const Button = ({ text, updater }) => {
  //updater function uses a cb function that takes the previous value that is to be updated.
  return <button onClick={() => updater((prev) => prev + 1)}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  const percent = text === "positive" ? "%" : "";
  const valueToDisplay = text === "positive" ? value * 100 : value;
  return (
    <p>
      {text} {valueToDisplay} {percent}
    </p>
  );
};

export default App;
