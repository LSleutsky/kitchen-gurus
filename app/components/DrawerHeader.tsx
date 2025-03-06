import { useState } from 'react';
import { Link } from "react-router";

import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';

import Logo from "~/components/Logo";

import type { NavLinks } from '~/utils/constants';
import { navLinks } from '~/utils/constants';

import Button from './Button';

export default function DrawerHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  return (
    <Box sx={{ display: `flex` }}>
      <AppBar component="nav" sx={{
        '&.MuiPaper-root': {
          background: `#51A655`,
        },
      }}>
        <Toolbar className="bg-[#51A655] flex justify-between" sx={{
          '&.MuiToolbar-root': {
            padding: `0 !important`,
            flexDirection: {
              xs: `row-reverse`,
              sm: `row`
            }
          }
        }}>
          <IconButton
            aria-label="Open Nav Drawer"
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: `none` } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
          <Box
            sx={{
              display: {
                xs: `none`,
                sm: `flex`
              },
              alignItems: `center`,
              marginRight: `14px`
            }}
          >
            {navLinks.map((link: NavLinks, index) => (
              <Link key={index} to={link.route}>
                <Button
                  className={`
                    text-white text-sm cursor-pointer bg-transparent border-none mx-3 font-[Manrope] font-medium
                    sm:text-base md:text-lg lg:mx-8 xl:mx-10 2xl:mx-12
                  `}
                  text={link.text}
                />
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Navigation Drawer */}
      <nav>
        <Drawer
          ModalProps={{ keepMounted: true }}
          open={mobileOpen}
          sx={{
            display: {
              xs: `flex`,
              sm: `none`
            },
            '& .MuiDrawer-paper': {
              boxSizing: `border-box`,
              width: 250,
              backgroundColor: `#51A655`,
              justifyContent: `space-between`
            }
          }}
          variant="temporary"
          onClose={handleDrawerToggle}
        >
          <Box sx={{ textAlign: `center` }} onClick={handleDrawerToggle}>
            <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
            <Divider />
            <Link className="text-white text-xl leading-[3em]" to="tel:1-800-834-6584">
              <PhoneIcon fontSize="medium" />
              {` 1-800-834-6584`}
            </Link>
            <Divider />
            <List>
              {navLinks.map((link: NavLinks, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{
                    '&.MuiButtonBase-root': {
                      justifyContent: `center`,
                      '&:hover': {
                        backgroundColor: `#F98500`
                      }
                    }
                  }}>
                    <Link key={index} className="text-center" to={link.route}>
                      <Button className="text-white cursor-pointer bg-transparent border-none mx-3 my-0.5" text={link.text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Divider />
            <span className="flex justify-center text-white px-2 py-3">
              <Link to="mailto:kitchengurusllc@gmail.com">
                <EmailIcon fontSize="small" sx={{
                  '&.MuiSvgIcon-root': {
                    marginRight: `4px`,
                    transform: `translateY(-1.5px)`
                  }
                }} />
                KitchenGurusLLC@gmail.com
              </Link>
            </span>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}
