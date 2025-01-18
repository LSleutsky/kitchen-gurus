import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import Logo from '~/components/Logo';
import { useClickOutside } from '~/hooks/useClickOutside';
import { getImageParameters, getUserLocation } from '~/utils';

export default function MainLayout() {
  const [bannerImageUrl, setBannerImageUrl] = useState<string>('');
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [userLocationData, setUserLocationData] = useState<any>({});
  const toggleMenu = () => setIsNavBarOpen(prev => !prev);
  const clickRef = useClickOutside(() => setIsNavBarOpen(false));
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const userLocation = await getUserLocation();

      setUserLocationData(userLocation)
    })();
  }, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * 4);;

    const bannerImages = [
      { id: 1, slug: 'abfb8500-2160-4798-ba8f-11e6bf606870' },
      { id: 2, slug: '6d99280e-439d-40ab-9513-142d9aa0b6e0' },
      { id: 3, slug: 'a1099375-2c11-4824-9c13-28b22de109cf' },
      { id: 4, slug: '79c7168d-a17f-462f-81b8-e5d53a9ba6d2' }
    ];

    const url = getImageParameters(bannerImages[random].slug);

    setBannerImageUrl(url);
  }, [location]);

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
        <div
          className={`relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >
          <div className="content=[''] absolute h-full w-full bg-black opacity-60" />
          <div className="content=[''] absolute -right-[24%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 md:-right-[14%]" />
        </div>
        <Banner />
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
