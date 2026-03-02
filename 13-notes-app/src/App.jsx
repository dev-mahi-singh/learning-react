import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle('')
    setDetails('')
  }

  // Delete Note
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex lg:w-1/2 items-start gap-4 flex-col p-10">

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/*INPUT FOR HEADING */}
        <input type="text" placeholder='Enter Notes Heading' value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className='px-5 w-full py-2 border-2 rounded outline-none font-medium' />

        {/*INPUT FOR DETAILS */}
        <textarea placeholder='Write Details here' value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 font-medium rounded outline-none'>
        </textarea>

        <button className='bg-white w-full text-black px-5 py-2 rounded outline-none font-medium active:scale-95'>Add Note</button>

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">

        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx}
              className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">

              <div>
                <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">{elem.details}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>

            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App