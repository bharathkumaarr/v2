import {Route, Routes, Link } from 'react-router-dom'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import About from './components/About'
import Loader from './components/Loader'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { useState, useEffect } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setIsLoading(false)
    } else {
      const timer = setTimeout(()=>{
      setIsLoading(false);
      sessionStorage.setItem('hasSeenLoader', true)
    }, 2000);
    return () => clearTimeout(timer);
      
    }



    

    
  }, []);

  return (
    <div className='h-screen w-screen bg-black text-zinc-400 flex justify-center'>

      {isLoading ? (
        <Loader />
      ) : (<div className='h-full w-1/2 border border-dashed border-zinc-800 border-t-0 border-b-0'>


        <Navbar />
        <main className="p-4">


        
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        
      
      

      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes> */}

      </div>) }
    </div>
  )
}

export default App
