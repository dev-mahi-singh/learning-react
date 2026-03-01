import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted");
    
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex justify-between items-start p-10">
        <div className="flex gap-4 w-1/2 items-start flex-col">
          <input type="text" placeholder='Enter Notes Heading' className='px-5 w-full py-2 border-2 rounded outline-none font-medium' />
          <textarea placeholder='Write Details' className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 font-medium rounded outline-none'></textarea>
          <button className='bg-white w-full  text-black px-5 py-2 rounded outline-none font-medium'>Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default App