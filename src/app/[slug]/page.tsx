import projects from '@/components/Data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = ({ params }: { params: string }) => {
  const { slug }: any = params
  console.log(projects[0].id === slug);

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
            <div className="h-[50rem] w-full dark:bg-black bg-[#000000] bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg- [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
              </div>
              <div className='relative z-20 flex flex-col gap-5 justify-center items-center'>
                <p className="text-4xl sm:text-7xl bg-clip-text text-transparent uppercase bg-gradient-to-b from-neutral-200 to-neutral-500 py-5 font-secular ">
                  {project.name}
                </p>
                <p className='px-5 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] text-center'>{project.bio}</p>
                <Link className='px-10 py-3  bg-third rounded-md text-white' href={project.github}>Project Link</Link>
              </div>
            </div>

            <div className='px-5 2xl:px-[15%]'>
              <div className='w-full rounded-lg overflow-hidden mx-auto flex justify-center'>
                <Image alt='project' src={project.image} />
              </div>
              <div>
                <h2 className='text-3xl font-semibold py-5'>Project Overview</h2>
                <p className=''>{project.overview}</p>
              </div>
              <div>
                <h2 className='text-3xl font-semibold py-5'>Used Tools</h2>
                <ul className='flex flex-col gap-3'>
                  {
                    project.usetools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='pb-10 w-full flex flex-col'>
                <h2 className='text-3xl font-semibold py-5'>See Live</h2>
                <Link className='bg-cyan-600 hover:bg-cyan-800 duration-300 px-14 py-3 font-semibold rounded-md mb-5 w-full text-center sm:w-56' href={project.live}>See Live</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default page