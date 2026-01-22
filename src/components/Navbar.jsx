import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-auto flex justify-center items-center font-geist-mono'>
      <div className='w-[95%] border-b border-zinc-800 border-dashed h-17 flex justify-between'>

        <div className='w-[5%] flex items-center justify-center'>
          <Link to='/'>

            <img src="/logo.jpg" alt="Logo" className='w-9 rounded-full cursor-pointer active:scale-95 transition-transform'/>
          
          </Link>
        </div>

        <div className=' flex items-center justify-between'>

        <Link to='/about'>
          <button className='border w-16 pt-1 pb-1 border-dashed border-zinc-900 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-500 ease-in-out cursor-pointer mr-3'>About</button>
        </Link>


        <Link to='projects'>
          <button className='border w-16 pt-1 pb-1 border-dashed border-zinc-900 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-500 ease-in-out cursor-pointer mr-3'>Projects</button>
        </Link>

        <Link to='blog'>
          <button className='border w-16 pt-1 pb-1 border-dashed border-zinc-900 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-500 ease-in-out cursor-pointer mr-3'>Blog</button>
        
        </Link>
        <Link to='contact'>
          <button className='border w-16 pt-1 pb-1 border-dashed border-zinc-900 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-500 ease-in-out cursor-pointer'>Contact</button>
        </Link>
        
        
        
        
        
        
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
