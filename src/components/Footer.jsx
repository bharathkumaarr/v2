import React, { useState, useEffect } from 'react'

function Footer() {
  const [time, setTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(567); // Starting seed

  useEffect(() => {
    // 1. Real-time Clock Logic
    const timer = setInterval(() => setTime(new Date()), 1000);

    // 2. Simulated Unique Visitor Logic (IP-like behavior)
    const handleVisitorCount = () => {
      const SIX_HOURS = 6 * 60 * 60 * 1000;
      const lastVisit = localStorage.getItem('lastVisitTimestamp');
      const now = new Date().getTime();

      // If no visit recorded OR last visit was more than 6 hours ago
      if (!lastVisit || (now - parseInt(lastVisit)) > SIX_HOURS) {
        // In a real app, you would do a: await supabase.from('stats').increment()
        // Here we simulate by adding 1 to our starting seed
        setVisitorCount(prev => prev + 1);
        localStorage.setItem('lastVisitTimestamp', now.toString());
      }
    };

    handleVisitorCount();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full h-auto flex justify-center items-center bottom-0 cursor-none'>
      <div className='border border-b-0 border-l-0 border-r-0 border-dashed w-[95%] h-17 border-zinc-800 flex items-center justify-between text-xs'> 
        <div>
          <h1 className='text-zinc-400'>Designed and Developed by <span className='text-zinc-200'>Bharath Kumar</span></h1>
          <p className='flex text-zinc-200/30'>
            <svg className='h-4 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path></svg>
            2025. All rights reserved.
          </p>
        </div>
        <div className='text-zinc-200/30 flex flex-col items-end'>
          <h1 className='flex text-zinc-200'>
            <svg className='h-4 mr-2 text-zinc-200/30' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
            </svg>
            #{visitorCount}
          </h1>
          <h1 className='font-geist-mono'>
            Bangalore, {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer