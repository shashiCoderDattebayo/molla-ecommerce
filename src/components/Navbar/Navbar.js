import React, { useContext, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Menu, MenuItem, Avatar, Divider } from '@mui/material';
import { ShoppingCart, FavoriteBorder, Google as GoogleIcon, ExitToApp } from '@mui/icons-material';
import { UserContext, signInWithGoogle } from '../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Firebase';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // User state is handled by UserContext
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await signOut(auth);
      setAnchorEl(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(135deg, rgba(62, 39, 35, 0.95) 0%, rgba(101, 67, 33, 0.9) 100%)',
      backdropFilter: 'blur(20px)',
      borderBottom: '3px solid rgba(255, 215, 0, 0.3)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 16px' }}>
        {/* Logo Section */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2 
        }}>
          <Typography variant="h3" sx={{
            fontSize: {xs: '2rem', md: '2.5rem'},
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
          }}>
            👑
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{
              color: '#FFD700',
              fontWeight: '900',
              fontSize: {xs: '1.2rem', md: '1.5rem'},
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255, 215, 0, 0.5)',
              letterSpacing: '-0.5px',
              lineHeight: 0.9,
              mb: 0
            }}>
              SPICE
            </Typography>
            <Typography variant="h5" sx={{
              color: '#FF6B35',
              fontWeight: '900',
              fontSize: {xs: '1.2rem', md: '1.5rem'},
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255, 107, 53, 0.5)',
              letterSpacing: '-0.5px',
              lineHeight: 0.9
            }}>
              KINGS
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Cart and Wishlist Icons */}
          <IconButton sx={{ 
            color: '#FFD700',
            '&:hover': { 
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              transform: 'scale(1.1)' 
            },
            transition: 'all 0.2s ease'
          }}>
            <Badge badgeContent={0} color="error">
              <FavoriteBorder />
            </Badge>
          </IconButton>
          
          <IconButton sx={{ 
            color: '#FFD700',
            '&:hover': { 
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              transform: 'scale(1.1)' 
            },
            transition: 'all 0.2s ease'
          }}>
            <Badge badgeContent={0} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* User Authentication Section */}
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ 
                  p: 0,
                  border: '2px solid rgba(255, 215, 0, 0.5)',
                  '&:hover': { 
                    border: '2px solid #FFD700',
                    transform: 'scale(1.05)' 
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <Avatar 
                  src={user.photoURL} 
                  alt={user.displayName}
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(62, 39, 35, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255, 215, 0, 0.3)',
                    borderRadius: '15px',
                    mt: 1
                  }
                }}
              >
                <MenuItem sx={{ color: '#FFD700', fontWeight: 'bold', pointerEvents: 'none' }}>
                  👑 {user.displayName}
                </MenuItem>
                <Divider sx={{ backgroundColor: 'rgba(255, 215, 0, 0.3)' }} />
                <MenuItem 
                  onClick={handleGoogleLogout}
                  sx={{ 
                    color: '#FF6B35', 
                    '&:hover': { backgroundColor: 'rgba(255, 107, 53, 0.1)' } 
                  }}
                >
                  <ExitToApp sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{
                borderColor: 'rgba(255, 215, 0, 0.8)',
                color: '#FFD700',
                borderRadius: '25px',
                padding: '8px 20px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                textTransform: 'none',
                borderWidth: '2px',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                '&:hover': {
                  borderColor: '#FFD700',
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
