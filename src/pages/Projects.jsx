import ProjectCard from '@/components/ProjectCard'
import React from 'react'


function Projects() {
  return (
    <div className='mt-8 m-3 p-1 font-geist-mono'>
      <h1 className='text-white text-4xl flex items-center font-hamilton'>projects. </h1>
      <p>small intro</p>
      <h2 className='w-full text-xl'>things i've built</h2>


      <ProjectCard />

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
