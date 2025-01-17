import { Link, NavLink } from "react-router";

interface Props {
  isOpen?: boolean;
  toggleMenu?: () => void;
}

const navLinks = [
  {
    route: '/',
    text: 'Home'
  },
  {
    route: '/gallery',
    text: 'Gallery'
  },
  {
    route: '/about',
    text: 'About Us'
  },
  {
    route: '/contact',
    text: 'Contact Us'
  }
];

export default function Header({ isOpen, toggleMenu }: Props) {
  return (
    <>
      <div className="p-2 min-w-28 max-w-60 max-h-32">
        <Link to="/">
          <img
            src="/kitchen-gurus-logo.png"
            alt="Kitchen Gurus logo"
            className="block w-full dark:block"
          />
        </Link>
      </div>
      <nav 
        className={`
          [&>*]:font-['Manrope'] font-semibold bg-[#51A655] w-full md:w-1/2 px-4 py-6 md:px-0 md:justify-end absolute md:static top-24 left-0
          ${isOpen ? "flex" : "hidden"} md:flex z-10`
        }
      >
        <ul
          aria-labelledby="nav-links"
          className="flex flex-col md:flex-row gap-6 w-full pt-2.5 border-t border-solid border-[#F98500] md:border-0 justify-around"
          role="menu"
        >
            {navLinks.map(({ route, text }) => (
              <li className="w-full text-center py-1.5 hover:bg-[#F98500] md:hover:bg-[transparent]" role="menuitem">
                <NavLink className="text-white inline-block w-full" onClick={toggleMenu} to={route}>
                  {text}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </>
  )
}