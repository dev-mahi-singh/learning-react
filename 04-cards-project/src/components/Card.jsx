import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <Top brandLogo={props.brandLogo} />
        <Center company={props.company} datePosted={props.datePosted} post={props.post} tag1={props.tag1} tag2={props.tag2} />
      </div>
      <Bottom pay={props.pay} location={props.location} />
    </div>
  )
}

export default Card
