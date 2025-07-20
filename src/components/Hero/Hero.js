import React, { useContext } from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { UserContext } from '../Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase';

const Hero = () => {
  const { user } = useContext(UserContext);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Box sx={{
      backgroundImage: `
        linear-gradient(135deg, rgba(62, 39, 35, 0.9) 0%, rgba(101, 67, 33, 0.8) 50%, rgba(62, 39, 35, 0.9) 100%), 
        radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.3) 0%, transparent 50%),
        url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)
      `,
      backgroundSize: 'cover, 150% 150%, 150% 150%, cover',
      backgroundPosition: 'center, 0% 0%, 100% 100%, center',
      backgroundRepeat: 'no-repeat',
      height: { xs: '450px', md: '500px' },
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(139, 69, 19, 0.1) 2px,
            rgba(139, 69, 19, 0.1) 4px
          )
        `,
        zIndex: 1
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `
          radial-gradient(circle, rgba(139, 69, 19, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'float 20s ease-in-out infinite',
        zIndex: 1
      },
      '@keyframes float': {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
        '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' }
      }
    }}>
      {/* Floating Spice Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF6B35, #FFD700)',
        opacity: 0.6,
        animation: 'bounce 3s ease-in-out infinite',
        zIndex: 1,
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }} />
      
      <Box sx={{
        position: 'absolute',
        top: '70%',
        right: '15%',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #8B4513, #FF6B35)',
        opacity: 0.5,
        animation: 'bounce 4s ease-in-out infinite reverse',
        zIndex: 1
      }} />
      
      <Box sx={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.3), rgba(139, 69, 19, 0.2))',
        animation: 'pulse 5s ease-in-out infinite',
        zIndex: 1,
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
          '50%': { transform: 'scale(1.2)', opacity: 0.5 }
        }
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{
          maxWidth: '800px', 
          color: 'white',
          textAlign: 'center',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {user && (
            <Chip
              label={`🙏 Welcome back, ${user.displayName || 'Spice King'}!`}
              sx={{
                backgroundColor: 'rgba(255, 215, 0, 0.95)',
                color: '#3E2723',
                fontWeight: 'bold',
                mb: 3,
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 215, 0, 0.6)'
              }}
            />
          )}
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 3,
            flexWrap: 'wrap',
            gap: {xs: 2, md: 3}
          }}>
            <Typography variant="h1" sx={{
              fontSize: {xs: '4rem', md: '6rem'},
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
            }}>
              👑
            </Typography>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h1" sx={{
                color: '#FFD700',
                fontWeight: '900',
                fontSize: {xs: '2.5rem', md: '4rem'},
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(255, 215, 0, 0.6)',
                letterSpacing: '-1px',
                filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))',
                lineHeight: 0.9,
                mb: 0
              }}>
                SPICE
              </Typography>
              <Typography variant="h1" sx={{
                color: '#FF6B35',
                fontWeight: '900',
                fontSize: {xs: '2.5rem', md: '4rem'},
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(255, 107, 53, 0.6)',
                letterSpacing: '-1px',
                filter: 'drop-shadow(0 0 15px rgba(255, 107, 53, 0.4))',
                lineHeight: 0.9
              }}>
                KINGS
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="h4" sx={{
            color: '#FFD700',
            fontWeight: '600',
            fontSize: {xs: '1.5rem', md: '2rem'},
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255, 215, 0, 0.5)',
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
            textAlign: 'center',
            lineHeight: 1.2
          }}>
            తెలుగు హెరిటేజ్ పికిల్స్
          </Typography>
          
          <Typography variant="h5" sx={{
            color: '#FFD700',
            fontWeight: '500',
            fontSize: {xs: '1rem', md: '1.3rem'},
            mb: 4,
            textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.3
          }}>
            "Where Tradition Meets Taste Revolution"
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            alignItems: 'center',
            mb: 4
          }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #FFD700 30%, #FFC107 90%)',
                color: '#3E2723',
                padding: '18px 45px',
                borderRadius: '35px',
                fontWeight: 'bold',
                fontSize: {xs: '1.1rem', md: '1.3rem'},
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFC107 30%, #FFD700 90%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 30px rgba(255, 215, 0, 0.7), 0 0 50px rgba(255, 215, 0, 0.4)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              👑 Shop Like a King
            </Button>
            
            {!user && (
              <Button 
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  color: 'white',
                  padding: '18px 35px',
                  borderRadius: '35px',
                  fontWeight: 'bold',
                  fontSize: {xs: '1rem', md: '1.1rem'},
                  textTransform: 'none',
                  borderWidth: '3px',
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  '&:hover': {
                    borderColor: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.25)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
🔥 Get Discounts
              </Button>
            )}
          </Box>
          
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: {xs: 2, md: 4},
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            {['🔥 Going Viral', '👑 Premium Quality', '🌶️ Authentic Taste', '🚀 Trending #1'].map((badge) => (
              <Chip
                key={badge}
                label={badge}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  fontSize: {xs: '12px', md: '14px'},
                  fontWeight: '500',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  padding: {xs: '4px 8px', md: '6px 12px'}
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
