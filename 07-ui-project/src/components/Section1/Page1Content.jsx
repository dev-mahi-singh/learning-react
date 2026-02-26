import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  return (
    <div className='h-[90vh] flex items-center gap-8 pb-6 px-18'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content