import React, {useState} from 'react'
// const App = () => (
//   <div>
//     <p>Hello World!</p>
//   </div>
// )
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  const {name, age} = props
  // const name = props.name
  // const age = props.age

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// export default App

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  // setTimeout(
  //   () => setCounter(counter+1)
  //   ,500
  // )

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne}
        text='plus'
      />
      <Button 
        onClick={setToZero}
        text='zero'
      />
      <Button 
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
    
  )
}

export default App