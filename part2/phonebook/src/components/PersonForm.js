import React from 'react'

const PersonForm = ({newName, newNumber, handleNewName, handleNewNumber,onSubmit}) =>
<form onSubmit={onSubmit} >
    <div>
        Name: <input value={newName} onChange={handleNewName} />
    </div>
    <div>
        Number: <input value={newNumber} onChange={handleNewNumber} />
    </div>
    <button type="submit">add</button>        
</form>

export default PersonForm