import { Mic, Headphones, Settings, User,Circle , Plus} from 'lucide-react';

import React from 'react'

const LeftPanel = () => {
  return (
    <div className='w-90 h-screen bg-gray-800 text-white flex relative'>
      <div className='flex flex-col  top-0 left-0 w-15 h-full bg-gray absolute'> 
        <div className='m-2 items-center p-5 rounded-md bg-black border border-gray-600'></div>
        <div className='m-2 items-center p-5 rounded-md bg-black border border-gray-600'></div>
        <div className='m-2 items-center p-5 rounded-md bg-black border border-gray-600'></div>

      </div>
      <div className='flex flex-col top-0 absolute left-15 w-80 h-full bg-gray-900'>
        <div className= " absolute">
          <input className='bg-gray-700 border hover:bg-gray-600 m-3 h-8 border-gray-600 rounded p-2 w-74' type="search" name="" id="123" placeholder='Search...' />
        </div>
        <div className=' absolute top-14 w-full bg bg-gray-600 h-0.5'></div>
        <div className='absolute flex-col space-y-2 top-16 p-3'>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 bg-black'><User size={20} />Channels</button>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 bg-black'><User size={20} />Friend</button>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 bg-black'><User size={20} />Nitro</button>
       </div>
       <div className=' absolute top-64 w-full bg bg-gray-600 h-0.5'></div>
       
       <div className=' absolute flex-col space-y-2 top-66 p-3'>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 '><Circle size={20} />Channels</button>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 '><Circle size={20} />Channels</button>
          <button className='hover:bg-gray-600 rounded-lg flex justify-start items-center p-3 w-74 '><Circle size={20} />Channels</button>
       </div>

      </div>
      <div className=' m-2 p-3 justify-between items-center bottom-0 absolute flex w-85 h-10 bg-gray-700 rounded-md'>
        <span className=''><h6 className=''>Profile name </h6></span>
        <div className='flex space-x-1 '>
          <button className="hover:bg-gray-600 p-1 rounded"><Mic size={20} /></button>
          <button className="hover:bg-gray-600 p-1 rounded"><Headphones size={20} /></button>
          <button className="hover:bg-gray-600 p-1 rounded"><Settings size={20} /></button>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel
