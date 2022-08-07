import { useState } from 'react'

const StatisticsLine = ({text, value}) => <tr>{text}{value}</tr>
  
const Button = ({onClick, text}) => <button onClick = {onClick}> {text}</button>

const Statistics = (props) => {
  if (props.allstat == 0) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      <StatisticsLine text = {<td>good</td>} value = {<td>{props.goodstat}</td>} />
      <StatisticsLine text = {<td>neutral</td>} value = {<td>{props.neutralstat}</td>} />
      <StatisticsLine text = {<td>bad</td>} value = {<td>{props.badstat}</td>} />
      <StatisticsLine text = {<td>all</td>} value = {<td>{props.allstat}</td>} />
      <StatisticsLine text = {<td>average</td>} value = {<td>{props.avestat.toFixed(1)}</td>} />
      <StatisticsLine text = {<td>positive</td>} value = {<td>{((props.goodstat / props.allstat)*100).toFixed(1)} %</td>} />
    </tbody>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [ave, setAve] = useState(0)

  const increaseGood = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAve(ave + 1)
  }
  const increaseNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
    setAve(ave + 0)
  }
  const increaseBad = () => {
    setAll (all + 1)
    setBad(bad + 1)
    setAve(ave - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick = {increaseGood}
        text = 'good'
      />
      <Button 
        onClick = {increaseNeutral}
        text = 'neutral'
      />
      <Button 
      onClick = {increaseBad}
      text = 'bad'
    />
    <h1>statistics</h1>
    <table cellPadding="5">
      <Statistics
        allstat ={all}
        goodstat = {good}
        neutralstat = {neutral}
        badstat = {bad}
        avestat = {ave / all}
    />
    </table>
    </div>
  )
}

export default App;

