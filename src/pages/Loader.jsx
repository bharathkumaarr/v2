import React from 'react'
import { LoaderFive } from "@/components/ui/loader";


function Loader() {
  return (
    <div className='h-full w-1/2 '>
    <div className='flex items-center justify-center h-full w-full select-none'>
        <LoaderFive className='text-center text-zinc-400 font-awesome-serif' text="Good design is as little design as possible." />
        
      
    </div>
    </div>
  )
}

export default Loader
