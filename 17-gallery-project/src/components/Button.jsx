import React from 'react'

const Button = ({ index, setIndex, setUserData }) => {
  return (
    <div className='flex justify-center gap-6 items-center p-4'>

      <button
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
        style={{ opacity: index == 1 ? 0.6 : 1 }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-semibold'>
        Prev
      </button>

      <h4>Page {index}</h4>

      <button
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-semibold'
        onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}
      >Next</button>
    </div>

  )
}

export default Button