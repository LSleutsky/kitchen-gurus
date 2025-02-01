import { useState } from 'react';
import { Link } from "react-router";

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

import Button from './Button';

const navLinks = [
  {
    route: `/`,
    text: `Home`,
  },
  {
    route: `/gallery`,
    text: `Gallery`,
  },
  {
    route: `/`,
    text: `Other Services`,
  },
  {
    route: `/about`,
    text: `About Us`,
  },
  {
    route: `/contact`,
    text: `Contact Us`,
  },
];

export default function DrawerHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  return (
    <Box sx={{ display: `flex` }}>
      <AppBar component="nav">
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
                xs: `none`, sm: `flex`
              },
              marginRight: `14px`
            }}
          >
            {navLinks.map((link, index) => (
              <Link key={index} to={link.route}>
                <Button className="text-white cursor-pointer bg-transparent border-none mx-3" text={link.text} />
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
            display: { xs: `block`, sm: `none` },
            '& .MuiDrawer-paper': {
              boxSizing: `border-box`,
              width: 240,
              backgroundColor: `#51A655`
            },
          }}
          variant="temporary"
          onClose={handleDrawerToggle}
        >
          <Box sx={{ textAlign: `center` }} onClick={handleDrawerToggle}>
            <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
            <Divider />
            <Link className="text-white text-xl leading-[3em]" to="tel:1-800-555-6666">
              <PhoneIcon fontSize="large" />
              {` 1-800-555-6666`}
            </Link>
            <Divider />
            <List>
              {navLinks.map((link, index) => (
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
        </Drawer>
      </nav>
      <Box component="div">
        <Toolbar />
      </Box>
    </Box>
  );
}
