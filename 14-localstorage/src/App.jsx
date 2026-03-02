import React from 'react'

const App = () => {

  const user = {
    user: "Maahii",
    age: 19,
    city: 'Raebareli'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const users = JSON.parse(localStorage.getItem('user'))

  console.log(users);


  return (
    <div>App</div>
  )
}

export default App