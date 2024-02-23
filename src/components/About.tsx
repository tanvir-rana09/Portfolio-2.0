import React from 'react'

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'git/github', 'React js', 'Next JS', 'Redux', 'Typescript', 'Responsive Design',
  ]
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold font-caveat'>About Me </h1>
      <hr className='w-20 mx-auto border-black border rounded-2xl'/>
      <p className='text-center px-44 '>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 2xl:px-[15%]'>
        <div>
          <h2 className='py-3 font-semibold text-xl px-5'>Get to know me!</h2>
          <div className='flex flex-col gap-3 px-5'>
            <p>I am Tanvir Rana. I am a Web Designer with 2 years of hands-on experience in crafting captivating digital experiences.I have best experience in HTML, CSS, and JavaScript, with expertise in frameworks like React.js and Next.js.I have also skilled in leveraging Tailwind CSS for rapid styling, Redux for state management, and ensuring responsive design principles are seamlessly integrated into every project.
            </p>
            <p>Experienced in version control with Git and GitHub, ensuring seamless collaboration and efficient project management. Constantly seeking to expand my skill set and stay abreast of emerging technologies to deliver cutting-edge solutions.

            </p>
            <p>You may not have a good life, but I can easily make your life a good one as a successful businessman.</p>
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-xl py-3'>I Know </h2>
          <ul className='flex flex-wrap gap-2'>
            {
              skills.map((skill) => (
                <li 
                className=' px-5 py-2 bg-third shadow-sm rounded-md'
                key={skill}>{skill}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About