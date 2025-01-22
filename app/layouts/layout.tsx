import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

import CloseIcon from "@mui/icons-material/Close";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Box from '@mui/material/Box';

import Banner from "~/components/Banner";
import Header from "~/components/Header";
import Logo from "~/components/Logo";

import useClickOutside from "~/hooks/useClickOutside";

import { getUserLocation } from "~/utils";

interface SocialMediOptions {
  icon: React.JSX.Element;
  name: string;
  url: string;
}

const socialMediaActions: SocialMediOptions[] = [
  { icon: <FacebookIcon />, name: `Facebook`, url: `https://www.facebook.com/basementgurus/` },
  { icon: <InstagramIcon />, name: `Instagram`, url: `https://www.instagram.com/basementguruu/` },
  { icon: <XIcon />, name: `X`, url: `https://x.com/basement_gurus` },
  { icon: <YouTubeIcon />, name: `YouTube`, url: `https://www.youtube.com/@basementgurus` }
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
            <button onClick={toggleMenu}>
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
        <div className="relative flex justify-center text-white md:justify-start">
          <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
        </div>
        <div className="flex flex-col items-center justify-between bg-black px-4 py-6 text-sm md:flex-row">
          <Box component="span">
            <CopyrightIcon className="-mt-0.5 text-white" fontSize="small" />
            <span className="ml-0.5 font-['Open_Sans'] text-white">
              {new Date().getFullYear()} Kitchen Gurus | All Rights Reserved
            </span>
          </Box>
          <Box className="mt-3 md:mt-0 [&>*]:mx-2 [&>*]:text-white" component="span" sx={{
            '& .MuiSvgIcon-root': {
              fontSize: `30px`,
              '&[data-testid="YouTubeIcon"]': {
                fontSize: `40px`
              }
            }
          }}>
            {socialMediaActions.map((socialMedia: SocialMediOptions) =>
              <Link
                key={socialMedia.name}
                target="_blank"
                title={socialMedia.name}
                to={socialMedia.url}
              >
                {socialMedia.icon}
              </Link>
            )}
          </Box>
        </div>
      </footer>
    </div>
  );
}
