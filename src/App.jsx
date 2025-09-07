import { Route, Routes, Link } from 'react-router-dom'
import Resume from './components/Resume'


function App() {
  
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center flex-col">
      
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col justify-center items-center">
              <div className="border-zinc-400 font-awesome-serif text-zinc-100 text-2xl selection:bg-zinc-100 selection:text-black mb-2">
                portfolio website coming soon.
              </div>

              {/* Link works like an <a> tag but for SPA */}
              <Link
                to="/resume"
                className="text-zinc-100 font-awesome-serif rounded hover:text-zinc-300"
              >
                View Resume &rarr;
              </Link>
            </div>
          }
        />
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </div>
  )
}

export default App
