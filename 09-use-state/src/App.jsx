import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const [username, setUsername] = useState('Mahie')

  function changeNum(){
    setNum(30)
    setUsername('Sarthak')
  }

  return (
    <div>
      <h1>Value of num is {num} <br /> value of username is {username} </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App