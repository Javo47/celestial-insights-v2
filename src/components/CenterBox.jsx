import React from 'react'

const CenterBox = ({centerContent}) => {
  return (
    <div className={`min-h-[500px] max-h-[500px] rounded-lg shadow ${centerContent} bg-contain bg-no-repeat bg-purple-500 bg-center`}></div>
  )
}

export default CenterBox