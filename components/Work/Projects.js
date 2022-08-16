import React from 'react'
import Filter from './Filter/Filter'
import ProjectCard from './ProjectCard'

const Projects = ({projects}) => {
  const projectTech = projects.map(project => project.tech);
  const techArray = projectTech.map(array => array)
  console.log(techArray);
  
  return (
    <div className=' min-h-screen py-20 ' id='work'>
        <div className='mx-auto container h-full flex flex-col  items-center '>
        <Filter />
        {/* <h1 className="text-primary font-bold text-6xl tracking-wide text-center absolute top-20 py-4">Work</h1> */}
            <div className=' max-w-xl  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center  content-center'>
                {projects.map(project => {
                    const {id, title, thumbnailImage, link, shadow} = project
                    // return  <ProjectCard key={id} title={title} link={link} shadow={shadow} thumbnailImage={thumbnailImage} />
                    return <div key={id}><ProjectCard title={title} link={link} shadow={shadow} thumbnailImage={thumbnailImage} />
                    <ProjectCard title={title} link={link} shadow={shadow} thumbnailImage={thumbnailImage} />
                    <ProjectCard title={title} link={link} shadow={shadow} thumbnailImage={thumbnailImage} /></div>
                })}
            </div>
            
        </div>

    </div>
  )
}

export default Projects