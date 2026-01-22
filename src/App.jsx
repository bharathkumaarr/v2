import {Router, Route, Routes, Link } from 'react-router-dom'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import About from './components/About'
import Loader from './components/Loader'
import { useState, useEffect } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen w-screen bg-black text-zinc-400 flex justify-center'>

      {isLoading ? (
        <Loader />
      ) : (<div className='h-full w-1/2 border border-dashed border-zinc-800 border-t-0 border-b-0'>


      <Router>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<blog />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </Router>

        
      
      

      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes> */}

      </div>) }
    </div>
  )
}

export default App
