import React, { useState } from 'react'

export default function Buttons() {
  const [count, change] = useState(0);
  return (
    <>
      <div className='flex'>
        <button className='m-10 bg-green-400 p-5 rounded-lg' type='button' onClick={() => change(count - 1)}>
          -
        </button>
        <div className='m-10 bg-blue-400 p-5 rounded-lg'>
          {count}
        </div>
        <button className='m-10 bg-green-400 p-5 rounded-lg' type='button' onClick={() => change(count + 1)}>
          +
        </button>
      </div>
    </>
  )
}
