import ProjectCard from '@/components/ProjectCard'
import React from 'react'


function Projects() {
  return (
    <div className='mt-8 m-3 p-1 font-geist-mono'>
      <h1 className='text-white text-4xl flex items-center font-hamilton'>projects. </h1>
      <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum explicabo perferendis, dolores necessitatibus provident quis at sunt dignissimos modi, incidunt ex mollitia nostrum facilis deleniti. Commodi officiis, aspernatur explicabo optio nam non voluptates et.</p>
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
