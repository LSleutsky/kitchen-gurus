import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MenuIcon from '@mui/icons-material/Menu';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import Logo from '~/components/Logo';
import { useClickOutside } from '~/hooks/useClickOutside';
import { getUserLocation } from '~/utils';

export default function MainLayout() {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [userLocationData, setUserLocationData] = useState<Object>({});
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
              {isNavBarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>
        </div>
      </header>
      <main className='flex-[1]'>
        <Banner />
        <Outlet context={userLocationData} />
      </main>
      <footer className='w-full bg-[#51A655]'>
        <div className="flex justify-center md:justify-start text-white">
          <Logo alt='Kitchen Gurus logo' src='/kitchen-gurus-logo.png' />
        </div>
        <div className="flex justify-center md:justify-start items-center bg-black p-6 text-sm">
          {/* <FaRegCopyright className="inline-block text-white mr-1" size={12} /> */}
          <CopyrightIcon className="text-white" fontSize="small" />
          <span className="text-white font-['Open_Sans'] ml-0.5">{new Date().getFullYear()} Kitchen Gurus | All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}
