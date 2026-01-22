import { Lenis } from 'lenis/react'
import {Route, Routes, Link } from 'react-router-dom'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import About from './pages/About'
import Loader from './pages/Loader'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { useState, useEffect } from 'react';

import TargetCursor from './components/TargetCursor';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/PageWrapper'



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
    }, 2800);
    return () => clearTimeout(timer);
      
    }
  }, []);

  return (
    <Lenis root options={{ lerp: 0.05, duration: 2.5, smoothWheel: true, wheelMultiplier: 0.8,
  touchMultiplier: 2, infinite: false, }}>
      <div className='min-h-screen w-screen bg-black text-zinc-400 flex justify-center selection:bg-zinc-900 selection:text-zinc-100 cursor-none '>
        <TargetCursor />

      {isLoading ? (
        <Loader />
      ) : (<div className='min-h-screen w-1/2 border border-dashed border-zinc-800 border-t-0 border-b-0'>


        <Navbar />
        <main className="p-4">


        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>

        </AnimatePresence>
          
        </main>

        
      
      

      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes> */}

      </div>) }
    </div>



    </Lenis>
    
  )
}

export default App
