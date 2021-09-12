import React from 'react'
import Person from './Person'

const Persons = ({persons, newFilter, deletePerson}) => {
  return(
    persons.filter(person =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person =>
    <div key= {person.id} >
        <Person
            name={person.name} 
            number={person.number} 
        />  
        
        <button type="button" value={person.id} onClick={deletePerson} >delete</button>
    </div>
  ))}

export default Persons