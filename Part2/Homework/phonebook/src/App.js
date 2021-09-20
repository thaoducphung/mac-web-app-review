import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id:0}
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [filterAll, setFilterAll] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // Check if name exists in object
    const found = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    console.log(found)
    if (found) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterAll.toLowerCase()))

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleFilterChange = (event) => setFilterAll(event.target.value)
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterAll={filterAll} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
      {/* {personsToShow.map(person =>
          <Person key={person.id} person={person}/>
        )} */}
    </div>
  )
}

export default App
