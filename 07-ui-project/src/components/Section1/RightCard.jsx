import RightCardContent from './RightCardContent'

const RightCard = () => {
    return (
        <div className='h-full shrink-0 w-80 relative overflow-hidden bg-red-500 rounded-4xl'>
            <img className='h-full w-full object-cover' src="" alt="" />
            <RightCardContent />
        </div>
    )
}

export default RightCard