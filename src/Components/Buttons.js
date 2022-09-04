import React from 'react'

let count = 0;
function increment(count) {
  return count++;
}

function decrement(count) {
  return count--;
}

export default function Buttons() {
  return (
    <>
    <div className='flex'>
      <button className='m-10 bg-green-400 p-5 rounded-lg' type='button' onClick={increment(count)}>
        -
      </button>
      <div className='m-10 bg-blue-400 p-5 rounded-lg'>
        {count}
      </div>
      <button className='m-10 bg-green-400 p-5 rounded-lg' type='button' onClick={decrement(count)}>
        +
      </button>
    </div>
    </>
  )
}
