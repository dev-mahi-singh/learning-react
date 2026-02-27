import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increaseNum = () => {
    setNum(num + 1)
  }

  const decreaseNum = () => {
    setNum(num - 1)
  }

  const jump5Num = () => {
    setNum(num + 5)
  }

  return (
    <div className='parent'>
      <h1>{num}</h1>
      <div>
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
      </div>
      <button onClick={jump5Num}>increase by 5</button>

    </div>
  )
}

export default App