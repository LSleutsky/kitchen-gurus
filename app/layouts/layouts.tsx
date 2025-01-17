import { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import Header from '~/components/Header';

export default function MainLayout() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const toggleMenu = () => setIsNavBarOpen(prev => !prev);

  return (
    <div className='h-full min-h-full flex flex-col'>
      <header className=' flex items-center justify-between md:px-10 relative bg-[#51A655] text-white'>
        <div className='w-full flex justify-around items-center'>
          <Header isOpen={isNavBarOpen} toggleMenu={toggleMenu} />
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
      <footer className='bg-[#51A655] w-full'>
        <div className='w-10/12 text-white m-auto'>
          <div className='p-6 flex min-w-28 max-w-60 max-h-32'>
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
