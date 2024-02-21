import { url } from "inspector"
import Link from "next/link"

const Navbar = () => {
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
      name: 'Services',
      slug: '/services',
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
    <div className="absolute inset-0">
      <ul className="w-[40rem] mx-auto flex justify-between items-center bg-third  rounded-full px-5 my-5 shadow-md py-2 font-caveat">
        {
          navitems.map((nav, i) => (
            <li 
            className="navbar"
            key={i}>
              <Link className="z-50" href={nav.slug}>{nav.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar