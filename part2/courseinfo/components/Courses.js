import React from 'react'

const Courses = ({ course }) => { 
    return (
      <div>
        {course.map(course => 
          <Course key ={course.id} course = {course}/>
        )}
      </div>
    )
}
  
const Course = ({ course }) => {
    return(
      <div> 
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
      </div>
    ) 
}
  
const Header = ({course}) => { 
    return <h1>{course}</h1>
}
  
const Part = (props) => { 
    return <p>{props.part} {props.exercises}</p>
}
  
const Content = ({parts}) => { 
    return (
      <div>
        {parts.map(part => 
          <Part key ={part.id} part = {part.name} exercises = {part.exercises}/>
        )}
      </div>
    )
}
  
const Total = ({parts}) => { 
    const array = parts.map(part => part.exercises)
    const total = array.reduce((previous, current) => previous + current)
    return <b>total of {total} exercises</b>
}

export default Courses
