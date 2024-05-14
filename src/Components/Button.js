import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-[#f1f1f1] text-[#161616] rounded-lg px-3 py-1'>{name}</button>
    </div>
  )
}

export default Button
