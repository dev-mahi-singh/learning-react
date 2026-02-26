const App = () => {

  function inputChanging(val) {
    console.log(val);

  }

  return (
    <div>
      <input onChange={(elem) => {
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default App