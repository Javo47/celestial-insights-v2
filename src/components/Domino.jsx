import React from 'react'

const Domino = ({labeling, bg="bg-transparent"}) => {
  return (
    <div className={`min-h-[282px] rounded-lg ${bg} shadow flex justify-center font-uncial`}>
                <h2 className="text-3xl mt-4">{labeling}</h2>
              </div>
  )
}

export default Domino