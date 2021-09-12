import React from 'react'
import Part from './Part'

const Contents = ({parts}) => parts.map(part => 
    <Part 
      key={part.id}
      name={part.name}
      exercises={part.exercises}
    />
)

export default Contents