import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/personService'
import './index.css'


const App = () => {
  
  const [ persons, setPersons ] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const Notification = ({message}) => {
    if (message === null) {
      return null
    }
    return (
      <div className="message">
        {message}
      </div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()
    
  const duplicate = persons.find(person => person.name === newName)
  if ( duplicate  && duplicate.number !== newNumber) { 
    personService
      .update(duplicate.id, {name: duplicate.name, number: newNumber})
      .then(returnedPerson => {
        if (window.confirm(`${returnedPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
          setPersons(persons.map(person => 
            person.id !== duplicate.id ? person : returnedPerson
            ))
        }
        setNewName('')
        setNewNumber('')
        setMessage(`${returnedPerson.name}'s number has been changed`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        setMessage(`Information of ${duplicate.name} has already been removed from server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      return
  } else if (duplicate) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
  } 

  personService
      .create({name: newName, number: newNumber})
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    })
  }
  
  const handleNewName = (event) => {
      setNewName(event.target.value)
  }
  
  const handleNewNumber = (event) => {
      setNewNumber (event.target.value)
  }
  
  const handleFilter = (event) => {
    setFilter (event.target.value)
  }

  const deletePerson = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.value)
    const person = persons.find(p => p.id === id)
   
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${person.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        setMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }     
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter
        value= {newFilter}
        onChange= {handleFilter}
      />  
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber} 
        onSubmit={addPerson} 
      />
      <h3>Numbers</h3>
      <ul>
        <Persons persons={persons} newFilter={newFilter} deletePerson = {deletePerson} />
      </ul>
      
    </div>
  )
}

export default App
