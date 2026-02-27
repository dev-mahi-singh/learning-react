import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({ user: 'Mahie', age: 19 })

  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = 'Sarthak';
    newNum.age = 29;
    setNum(newNum);
  }

  return (
    <div className='parent'>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App