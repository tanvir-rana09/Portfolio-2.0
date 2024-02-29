import projects from '@/components/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = ({ params }: { params: string }) => {
  const { slug }: any = params
  console.log(projects[0].id===slug);

  projects.find((data) => {
    console.log(data.id === slug);
    
  })
  return (
    <div className='text-gray-300'>

      {
        projects.filter((data) => {
         return data.id === slug
        }).map((project) => (
          <div key={project.id}>
            <div>
              <h1>{project.name}</h1>
              <p>{project.bio}</p>
              <Link href={project.github}>Project Link</Link>
            </div>
            <div>
              <div>
                <Image alt='project' src={project.image} />
              </div>
              <div>
                <h2>Project Overview</h2>
                <p>{project.overview}</p>
              </div>
              <div>
                <h2>Used Tools</h2>
                <ul>
                  {
                    project.usetools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h2>See Live</h2>
                <Link href={project.live}>Live</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default page