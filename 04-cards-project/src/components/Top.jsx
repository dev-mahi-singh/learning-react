import { Bookmark } from 'lucide-react'

const Top = (props) => {
  return (
    <div className="top">
      <img src={props.brandLogo} alt="" />
      <button>Save <Bookmark size={10} /> </button>
    </div>
  )
}

export default Top
