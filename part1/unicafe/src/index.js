import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ value }) => <h1>{value}</h1>
const Statistics = ({ text, value }) => <div>{text}{value}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Display value={"give feedback"} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Display value={"statistics"} />
      <Statistics text={"good "} value={good} />
      <Statistics text={"neutral "} value={neutral} />
      <Statistics text={"bad "} value={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)