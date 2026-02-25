const RightCardContent = () => {
    return (
        <div className="absolute top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between">
            <h2 className='h-12 w-12 flex justify-center items-center bg-white rounded-full text-xl font-semibold'>1</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, delectus sint voluptates iste accusamus id?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium rounded-full px-8 py-2'>Satisfied</button>
                    <button className='bg-blue-600 text-white font-medium rounded-full px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent