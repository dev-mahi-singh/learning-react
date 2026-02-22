import React from 'react'
import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'


const Card = () => {
  return (
    <div className="card">
        <div>
       <Top />
       <Center />
        </div>
        <Bottom />
      </div>
  )
}

export default Card
