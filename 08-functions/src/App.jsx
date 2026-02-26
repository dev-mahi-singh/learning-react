import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button is clicked'); 
  }

  function mouseEnter(){
    console.log("Mouse Entered");
    
  }

  return (
    <div>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click here</button>
      <button onClick={btnClicked}>explore this</button>
    </div>
  )
}

export default App