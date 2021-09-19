import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [voteArray, setVoteArray] = useState(Array(anecdotes.length).fill(0))
  console.log(voteArray)
   
  const [selected, setSelected] = useState(0)

  // const randomizedAnecdotes = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const randomizedAnecdotes = () => {
    let randomizedIndex = Math.floor(Math.random() * anecdotes.length)
    while (randomizedIndex === selected) {
      randomizedIndex = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(randomizedIndex)
  }

  const [mostVote,setMostVote] = useState(0)
  const [mostVoteIndex,setMostVoteIndex] = useState(0)

  const voteAnecdotes = () => {
    const updateVoteArray = [...voteArray]
    updateVoteArray[selected] += 1
    setVoteArray(updateVoteArray)
    // This one may be slow
    // setMostVote(updateVoteArray.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
    // This one may faster to keep track of the maximum one
    if (updateVoteArray[selected] > mostVote) {
      setMostVote(updateVoteArray[selected])
      setMostVoteIndex(selected)
    }

  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {voteArray[selected]} votes
      <br/>
      <Button onClick={voteAnecdotes} text="vote"/>
      <Button onClick={randomizedAnecdotes} text="next anecdote"/>

      <h1>Anecdote with most votes</h1>
      {/* {anecdotes[mostVote]} */}
      {anecdotes[mostVoteIndex]}
      <br/>
      {/* has {voteArray[mostVote]} votes */}
      has {voteArray[mostVoteIndex]} votes
    </div>
  )
}

export default App