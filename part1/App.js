const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const array = [props.total[0].exercises, props.total[1].exercises, props.total[2].exercises]
  let init = 0
  array.forEach(value => {
    init += value
  })
  const total = init
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ] 
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total total = {course.parts} />
    </div>
  )
}

export default App;
