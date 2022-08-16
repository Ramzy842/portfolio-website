import React from 'react'

const Technology = ({tech}) => {
  return (
    <div className={`py-1 px-2 mr-2 text-xs text-black font-medium`} style={{background: tech.bgColor}} >
      {tech.name}
    </div>
  )
}

export default Technology