import { Link, NavLink } from "react-router";

interface Props {
  isOpen?: boolean;
  toggleMenu?: () => void;
}

export default function Header({ isOpen, toggleMenu }: Props) {
  const navLinks = [
    {
      route: '/',
      text: 'Home'
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
          [&>*]:font-['Manrope'] [&>*]:px-6 font-semibold bg-[#51A655] w-full md:w-1/2 px-4 py-6 md:px-0 md:justify-end absolute md:static top-24 left-0
          ${isOpen ? "flex" : "hidden"} md:flex z-10`
        }
      >
        <ul className="flex flex-col md:flex-row gap-6 w-full pt-2.5 border-t border-solid border-[#F98500] md:border-0 justify-around">
          {navLinks.map(({ route, text }) => (
            <li>
              <NavLink className="text-white hover:text-[#F98500]" onClick={toggleMenu} to={route}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}