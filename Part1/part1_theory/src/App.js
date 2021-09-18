import React from 'react'
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
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    // <div>
    //   <p>Hello world, it is {now.toString()}</p>
    //   <p>
    //     {a} plus {b} is {a+b}
    //   </p>

    // </div>

    <div>
      <h1>Greetings</h1>
      <Hello name="Thao" age={10}/>
      <Hello name="Duc" age={12}/>
      <Hello name="Phung" age={14}/>
      <Hello />
      <Footer />
    </div>

  )

}

export default App