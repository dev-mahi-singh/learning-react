import React from 'react'

const Card = ({ elem }) => {
    return (
        <>
            <a href={elem.url} target='_blank'>
                <div className="mb-4 break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative">
        
                    <img className="w-full object-cover" src={elem.download_url} />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-5">
                        <h1 className='text-white text-2xl'>{elem.author}</h1>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card