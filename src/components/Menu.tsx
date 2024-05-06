import Link from "next/link";

export function Menu() {
    const navitems = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "Projects",
            slug: "#projects",
        },
        {
            name: "about",
            slug: "#about",
        },
        {
            name: "Services",
            slug: "#services",
        },
    ];
    return (
        <nav className="menu fixed overflow-hidden w-full">
            <ul className="animationMenuItems fixed">
                {navitems.map((nav, i) => (
                    <li
                        className="animationMenuItem font-caveat text-sm"
                        key={i}
                    >
                        <Link className="" href={nav.slug}>
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
