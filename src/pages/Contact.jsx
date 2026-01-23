import React from 'react'

function Contact() {
  return (
    <div className='mt-8 m-3 p-1 font-geist-mono'>
      <h1 className='text-white text-4xl flex items-center font-hamilton'>Contact me. </h1>

      <div className='flex w-full items-center justify-around mt-20'>
        <div className='border border-zinc-800 border-dashed w-1/2 mr-10 h-54 flex justify-center items-center text-zinc-800 hover:text-zinc-400 transition-colors ease-in-out duration-500'><svg className='h-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg></div>
        <div className='border border-zinc-800  border-dashed w-1/2 h-54 flex justify-center items-center text-zinc-800 hover:text-zinc-400 transition-colors ease-in-out duration-500'> 
          <svg className='h-36' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 10.25L17 8V14L14 11.75V14H7V8H14V10.25ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
        </div>
      </div>

    </div>
  )
}

export default Contact
