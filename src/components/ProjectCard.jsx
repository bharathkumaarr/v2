import React from 'react'

function ProjectCard() {
  return (
    <div className=' h-45 border border-dashed border-zinc-800 hover:border-zinc-700 ease-in-out transition-all duration-500 mt-4 mb-4 p-4 flex hover:bg-zinc-900/30 '>

        <div className='h-full w-1/2 mr-4'>
          <img src="" alt="" />
        </div>
        <div className='w-1/2 p-2'>
          <div className=' h-1/5 w-full flex items-center justify-between ease-in-out transition-colors duration-300' >
              <h4>Project Title</h4>

              <div className='text-xs'>
                <a href="" className='m-1 border-none bg-zinc-800 rounded-xs p-1 hover:bg-zinc-900 ease-in-out transition-colors duration-500'>Live</a>
                |
                <a href="" className='m-1 border-none bg-zinc-800 rounded-xs p-1 hover:bg-zinc-900 ease-in-out transition-colors duration-500'>Github</a>
              </div>
          </div>
          <div className='text-xs mt-2'>
            <div className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aspernatur ipsa sequi, maxime amet natus!</div>
            <div className='mt-2'>
              <h1 className=''>Tech Used: </h1>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          

        
        </div>

        
      
    </div>
  )
}

export default ProjectCard
