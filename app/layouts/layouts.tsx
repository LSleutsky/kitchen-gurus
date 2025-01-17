import { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import Header from '~/components/Header';
import { useClickOutside } from '~/hooks/useClickOutside';

export default function MainLayout() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const toggleMenu = () => setIsNavBarOpen(prev => !prev);
  const clickRef = useClickOutside(() => setIsNavBarOpen(false));

  return (
    <div className='flex h-full min-h-full flex-col'>
      <header className='relative flex items-center justify-between bg-[#51A655] text-white md:px-10'>
        <div className='flex w-full items-center justify-around'>
          <Header clickRef={clickRef} isOpen={isNavBarOpen} toggleMenu={toggleMenu} />
          <div className='flex items-center gap-4 md:hidden'>
            <button onClick={toggleMenu}>
              {isNavBarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main className='flex-[1]'>
        <Outlet />
      </main>
      <footer className='w-full bg-[#51A655]'>
        <div className='m-auto w-10/12 text-white'>
          <div className='flex max-h-32 min-w-28 max-w-60 p-6'>
            <Link to='/'>
              <img
                src='/kitchen-gurus-logo.png'
                alt='Kitchen Gurus logo'
                className='block w-full dark:block'
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
