'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {

  const [fixedNav, setFixedNav] = useState(false)


	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 300) {
				setFixedNav(true)
			} else {
				setFixedNav(false)
			}
		})
	}, [])

  const navitems = [
    {
      name: 'Home',
      slug: '/',
    },
    {
      name: 'Projects',
      slug: '/projects',
    },
    {
      name: 'about',
      slug: '/about',
    },
    {
      name: 'Contact',
      slug: '/contact',
    }
  ]
  return (
    <div className='relative flex justify-center z-[99]'>
     <div className={`w-[40rem] flex justify-evenly mx-auto fixed top-0 h-16 z-[100] rounded-full duration-1000 ${fixedNav ? 'fixed top-4 transparent bg-primary text-white z-50 shadow-md ' : 'fixed top-4 transparent bg-transparent text-white z-50'}`}>
        <ul className="flex justify-evenly items-center py-3 font-caveat w-full">
          {
            navitems.map((nav, i) => (
              <li
                className="navbar "
                key={i}>
                <Link className="z-50 text-3x text-white" href={nav.slug}>{nav.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar