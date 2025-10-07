import React from 'react'

const MiddlePanel = () => {
  return (
    <div className=' h-screen bg-gray-900 text-black flex justify-center items-center'>
      <div className="w-3px bg-gray-300 dark:bg-gray-200" role="separator "></div>
      <header>
        <form className='text-amber-50 ' action="search" method="get">
          <input type="text" name="query" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>

      </header>
    </div>
  )
}

export default MiddlePanel
