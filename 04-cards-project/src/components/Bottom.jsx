const Bottom = (props) => {
  return (
    <div className="bottom">
      <div>
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
      </div>
      <button>Apply now</button>
    </div>
  )
}

export default Bottom
