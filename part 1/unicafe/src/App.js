import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return (
    <tr>
      <td> {text} </td> <td>{value} %</td>
    </tr>
      )
  }
  return (
    <tr>
      <td> {text} </td> <td>{value} </td>
    </tr>
  )  
}

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1)/ all
  const positive = (clicks.good * 100)/ all 

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
return (
  
    <table>
      <StatisticLine text="good" value= {clicks.good} />
      <StatisticLine text="neutral" value={clicks.neutral} />
      <StatisticLine text="bad" value={clicks.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </table>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good:0, neutral:0, bad:0
  })


  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () => 
    setClicks({...clicks, neutral:clicks.neutral + 1})

  const handleBadClick = () => 
    setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h2>Statistics</h2>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App
