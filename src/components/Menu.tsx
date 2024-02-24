import Link from "next/link";

export function Menu() {
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
	  <nav className="menu">
		<ul className="animationMenuItems" >
          {
            navitems.map((nav, i) => (
              <li
                className="animationMenuItem font-caveat"
                key={i}>
                <Link className="" href={nav.slug}>{nav.name}</Link>
              </li>
            ))
          }
        </ul>
	  </nav>
	);
  }
  