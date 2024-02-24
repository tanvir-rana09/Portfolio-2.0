import Image from 'next/image'
import React from 'react'
import work1 from '@/assets/pexels-canva-studio-3194519.jpg'
import work2 from '@/assets/pexels-cottonbro-studio-3205568.jpg'
import { IoMdDoneAll } from "react-icons/io";
import Counter from './counter';
import { FaUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";
import { AnimatedTooltipPreview } from './Tooltip';
const About = () => {

  const data = [
    'Provide Web Design & Development',
    'Resposive Design',
    'Best Website Support & Consultations',
    'User Experience (UX) Design',
    'Performance Optimization',
  ]
  return (
    <div className='py-20 bg-[#0A0A0A]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5'>
        <div className='flex gap-5 place-self-end'>
          <div className='shadow-md w-66 h-80 relative'>
            <Image className='w-full h-full rounded-xl object-cover bt-14 ' src={work1} alt="work" />
          </div>
          <div className='shadow-md w-66 h-80 relative'>
            <Image className='w-full h-full rounded-xl object-cover mt-14  ' src={work2} alt="work" />
          </div>
        </div>
        <div className='place-self-center'>
          <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='text-white text-5xl font-secular uppercase '>About</h1>
            <h2 className='text-gray-300'>
              We offer the best design and development services!
            </h2>
            <p className='text-gray-300'>
              Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships.
            </p>
            <ul>
              {
                data.map((data: string) => (
                  <li
                    className='flex items-center gap-2 '
                    key={data}>
                    <span className='text-white z-50'> <IoMdDoneAll /></span>
                    <p className='text-gray-300'>{data}</p>
                  </li>
                ))
              }
            </ul>
            <div >
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>
      </div>
      {/* <Counter/> */}
      <div className='flex flex-wrap gap-3 justify-evenly mt-20'>
        <Counter value={100} name='Happy Clients' icon={<FaUser />} />
        <Counter value={150} name='Project Complete' icon={<GrProjects />} />
        <Counter value={3} name='Years Of Experience' icon={<FaCalendarDays />} />
      </div>
    </div>
  )
}

export default About