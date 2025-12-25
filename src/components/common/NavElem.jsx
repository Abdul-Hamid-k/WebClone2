import React from 'react'

const NavElem = ({ text, additionalClass }) => {
  return (
    <div className={`px-3 py-2 bg-gray-500 rounded-sm uppercase text-sm cursor-pointer hover:opacity-90 text-primary ${additionalClass}`}>{text}</div>
  )
}

export default NavElem