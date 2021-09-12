import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Total from './Total'

const Course = ({courses}) => courses.map(course =>
    <div key={course.id} >
      <Header name={course.name} />
      <Contents parts={course.parts} />
      <Total parts={course.parts} />
    </div> 
)

export default Course