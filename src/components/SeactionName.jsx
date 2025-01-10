import React from 'react'

const SeactionName = ({heading}) => {
  return (
    <div className=' w-full text-center text-black font-one'>
        <h1 className='font-bold text-[30px] md:text-[50px] lg:text-[40px] xl:text-[50px]'>{heading}</h1>
    </div>
  )
}

export default SeactionName