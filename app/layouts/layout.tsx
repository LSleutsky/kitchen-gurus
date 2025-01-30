import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

import CloseIcon from "@mui/icons-material/Close";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Banner from "~/components/Banner";
import Header from "~/components/Header";
import Logo from "~/components/Logo";

import useClickOutside from "~/hooks/useClickOutside";

import { getUserLocation } from "~/utils";

interface SocialMediaOptions {
  icon: React.JSX.Element;
  name: string;
  url: string;
}

const socialMediaActions: SocialMediaOptions[] = [
  { icon: <FacebookIcon />, name: `Facebook`, url: `https://www.facebook.com/basementgurus/` },
  { icon: <InstagramIcon />, name: `Instagram`, url: `https://www.instagram.com/basementguruu/` },
  { icon: <XIcon />, name: `X`, url: `https://x.com/basement_gurus` },
  { icon: <YouTubeIcon sx={{ fontSize: `32px` }} />, name: `YouTube`, url: `https://www.youtube.com/@basementgurus` }
];

export default function MainLayout() {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [userLocationData, setUserLocationData] = useState<object>({});
  const toggleMenu = () => setIsNavBarOpen(prev => !prev);
  const clickRef = useClickOutside(() => setIsNavBarOpen(false));

  useEffect(() => {
    (async () => {
      const userLocation = await getUserLocation();

      setUserLocationData(userLocation);
    })();
  }, []);

  return (
    <div className="flex h-full min-h-full flex-col">
      <header className="relative flex items-center justify-between bg-[#51A655] text-white">
        <div className="flex w-full items-center justify-between">
          <Header clickRef={clickRef} isOpen={isNavBarOpen} toggleMenu={toggleMenu} />
          <div className="flex items-center gap-4 pr-8 md:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {isNavBarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-[1]">
        <Banner />
        <Outlet context={userLocationData} />
      </main>
      <footer className="w-full bg-[#51A655]">
        <div className="flex justify-center text-white md:justify-start">
          <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
        </div>
        <div className="flex flex-col items-center justify-between bg-black p-4 text-sm md:flex-row">
          <Link className="text-white text-base mb-2 md:mb-0" to="tel:1-800-555-6666">
            <PhoneIcon />
            {` 1-800-555-6666`}
          </Link>
          <span>
            <CopyrightIcon className="-mt-0.5 text-white translate-[-1.5px]" fontSize="small" />
            <span className="ml-0.5 font-['Open_Sans'] text-white text-base">
              {new Date().getFullYear()} Kitchen Gurus | All Rights Reserved
            </span>
          </span>
          <span className="mt-3 md:mt-0 [&>*]:mx-2 [&>*]:text-white">
            {socialMediaActions.map((socialMedia: SocialMediaOptions) =>
              <Link
                key={socialMedia.name}
                target="_blank"
                title={socialMedia.name}
                to={socialMedia.url}
              >
                {socialMedia.icon}
              </Link>
            )}
          </span>
        </div>
      </footer>
    </div>
  );
}
