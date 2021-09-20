import React from 'react'


const Person = (props) => {
  const {person} = props 
  return (
  <div>{person.name} {person.phone}</div>
  )
}

export default Person