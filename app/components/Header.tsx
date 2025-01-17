import { Link, NavLink } from 'react-router';
import Logo from './Logo';

interface Props {
  clickRef: any;
  isOpen: boolean;
  toggleMenu: () => void;
}

const navLinks = [
  {
    route: '/',
    text: 'Home',
  },
  {
    route: '/gallery',
    text: 'Gallery',
  },
  {
    route: '/about',
    text: 'About Us',
  },
  {
    route: '/contact',
    text: 'Contact Us',
  },
];

export default function Header({ clickRef, isOpen, toggleMenu }: Props) {
  return (
    <>
      <Logo action={toggleMenu} alt='Kitchen Gurus logo' src='/kitchen-gurus-logo.png' />
      <nav
        className={`absolute left-0 top-24 w-full bg-[#51A655] px-4 py-2 font-semibold md:static md:w-1/2 md:justify-end md:px-0 [&>*]:font-['Manrope'] ${isOpen ? 'flex' : 'hidden'} z-10 md:flex`}
        ref={clickRef}
      >
        <ul
          aria-labelledby='nav-links'
          className='flex w-full flex-col justify-around gap-4 border-t border-solid border-[#F98500] pt-2.5 md:flex-row md:border-0'
          role='menu'
        >
          {navLinks.map(({ route, text }) => (
            <li
              key={text}
              className='w-full py-1.5 text-center hover:bg-[#F98500] md:hover:bg-[transparent]'
              role='menuitem'
            >
              <NavLink className='inline-block w-full text-white' onClick={toggleMenu} to={route}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
