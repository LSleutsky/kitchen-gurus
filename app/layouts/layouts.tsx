import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import Header from '~/components/Header';
import Logo from '~/components/Logo';
import { useClickOutside } from '~/hooks/useClickOutside';
import { getUserLocation } from '~/utils';

export default function MainLayout() {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [userLocationData, setUserLocationData] = useState<any>({});
  const toggleMenu = () => setIsNavBarOpen(prev => !prev);
  const clickRef = useClickOutside(() => setIsNavBarOpen(false));

  useEffect(() => {
    (async () => {
      const userLocation = await getUserLocation();

      setUserLocationData(userLocation)
    })();
  }, []);

  return (
    <div className='flex h-full min-h-full flex-col'>
      <header className='relative flex items-center justify-between bg-[#51A655] text-white'>
        <div className='flex w-full items-center justify-between'>
          <Header clickRef={clickRef} isOpen={isNavBarOpen} toggleMenu={toggleMenu} />
          <div className='flex items-center gap-4 md:hidden pr-8'>
            <button onClick={toggleMenu}>
              {isNavBarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main className='flex-[1]'>
        <Outlet context={userLocationData} />
      </main>
      <footer className='w-full bg-[#51A655]'>
        <div className='m-auto text-white'>
          <Logo alt='Kitchen Gurus logo' src='/kitchen-gurus-logo.png' />
        </div>
      </footer>
    </div>
  );
}
