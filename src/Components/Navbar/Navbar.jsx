import {useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FaLeaf } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { config } from "../../config/index"
import { error } from "../../Components/Toast/Toast"






const pages = [['About',"/about"],['Code'," https://github.com/aadarsh-ram/TRINIT_hackerXhacker_DEV"]];
const settings = ['Dashboard', 'Logout'];
const loginSettings = ['Login']

function Navbar() {
    const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [profileDrop, setProfileDrop] = useState(loginSettings);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem(config["token_name"]))
  },[])

  useEffect(()=>{
    isLoggedIn ? setProfileDrop(settings) : setProfileDrop(loginSettings)

  },[isLoggedIn])

  return (
    <AppBar position="sticky" style={{ background: '#50C878' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <FaLeaf color='#000000'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=>{navigate("/")}}
            sx={{
              ml:2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#000000",
              textDecoration: 'none',
            }}
          >
            ECO TRACK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a href={page[1]}><Typography textAlign="center" color={"#000000"}>{page[0]}</Typography> </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=>{navigate("/")}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:"#000000",
              textDecoration: 'none',
            }}
          >
            ECO TRACK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <a key={page} href={page[1]}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000000', display: 'block' }}
              >
                {page[0]}
              </Button></a>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <BsFillPersonFill/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {profileDrop.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography onClick={()=>{
                    if(setting == 'Login') {
                      navigate("/login");
                    }
                    if(setting == 'Dashboard') navigate("/list")
                    if(setting == 'Logout') {
                        setIsLoggedIn(false)
                        localStorage.removeItem(config["token_name"]);
                        navigate("/")
                        error("Logged Out!")
                    }
                    }} 
                    textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} 
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;