'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import useMenuAnimation from "./MenuAnimation"
import { Menu } from "./Menu"
import { MenuToggle } from "./MenuToggle"
import { motion } from 'framer-motion'
import { anim } from "./Animation"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
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
      slug: '#projects',
    },
    {
      name: 'about',
      slug: '#about',
    },
   
    {
      name: 'Services',
      slug: '#services',
    },
  ]
  return (
    <div className='relative flex justify-center z-[99]'>
      <div className="sm:hidden block " ref={scope}>
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
      <div
       
        className={`hidden w-[40rem] sm:flex justify-evenly mx-auto fixed top-0 h-16 z-[100] rounded-full duration-1000 ${fixedNav ? 'fixed top-4 transparent bg-primary text-white z-50 shadow-md ' : 'fixed top-4 transparent bg-transparent text-white z-50'}`}>
        <ul
        className="flex justify-evenly items-center py-3 font-caveat w-full">
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