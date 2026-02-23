const Center = (props) => {
  return (
    <div className="center">
      <h3>{props.company} <span>{props.datePosted}</span> </h3>
      <h2>{props.post}</h2>
      <div className='tag'>
        <h4>{props.tag1}</h4>
        <h4>{props.tag2}</h4>
      </div>
    </div>
  )
}

export default Center