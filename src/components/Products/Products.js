import { Container, Typography, Box, Grid, Paper, Button, Snackbar, Alert, Chip, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useContext, useRef } from 'react';
import { UserContext } from '../Firebase';

const Products = () => {
  const { user } = useContext(UserContext);
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "పప్పాయ పచ్చడి",
      englishName: "Raw Papaya Pickle",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Traditional Andhra-style raw papaya pickle with authentic spices and sesame oil",
      rating: 4.8,
      isPopular: true,
      weight: "250g"
    },
    {
      id: 2,
      name: "దొండకాయ పచ్చడి",
      englishName: "Ivy Gourd Pickle",
      price: 179,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Crispy ivy gourd pickle with traditional Telugu spices and mustard oil",
      rating: 4.6,
      isPopular: false,
      weight: "250g"
    },
    {
      id: 3,
      name: "మామిడికాయ పచ్చడి",
      englishName: "Green Mango Pickle",
      price: 189,
      originalPrice: 239,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Tangy green mango pickle with authentic Guntur chili powder",
      rating: 4.9,
      isPopular: true,
      weight: "250g"
    },
    {
      id: 4,
      name: "గాబరుట్టా పచ్చడి",
      englishName: "Mixed Vegetable Pickle",
      price: 219,
      originalPrice: 279,
      image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Traditional mixed vegetable pickle with garlic and ginger",
      rating: 4.7,
      isPopular: false,
      weight: "300g"
    },
    {
      id: 5,
      name: "టమాట పచ్చడి",
      englishName: "Tomato Pickle",
      price: 169,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1592147862246-4f3dbe2b3dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Sweet and tangy tomato pickle with traditional spices",
      rating: 4.5,
      isPopular: false,
      weight: "250g"
    },
    {
      id: 6,
      name: "నేల్లకాయ పచ్చడి",
      englishName: "Bitter Gourd Pickle",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1559847844-d7b57cbacb6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Unique bitter gourd pickle with special herbs and spices",
      rating: 4.4,
      isPopular: false,
      weight: "250g"
    }
  ];

  const addToCart = (product) => {
    if (!user) {
      setSnackbar({
        open: true,
        message: '🔥 Please sign in to add items to cart!',
        severity: 'warning'
      });
      return;
    }

    const existingItem = cartList.find(item => item.id === product.id);
    if (existingItem) {
      setSnackbar({
        open: true,
        message: '👑 Item already in cart!',
        severity: 'info'
      });
      return;
    }

    setCartList([...cartList, product]);
    setSnackbar({
      open: true,
      message: `🛒 ${product.englishName} added to cart!`,
      severity: 'success'
    });
  };

  const addToWishlist = (product) => {
    if (!user) {
      setSnackbar({
        open: true,
        message: '🔥 Please sign in to add items to wishlist!',
        severity: 'warning'
      });
      return;
    }

    const existingItem = wishList.find(item => item.id === product.id);
    if (existingItem) {
      setSnackbar({
        open: true,
        message: '❤️ Item already in wishlist!',
        severity: 'info'
      });
      return;
    }

    setWishList([...wishList, product]);
    setSnackbar({
      open: true,
      message: `❤️ ${product.englishName} added to wishlist!`,
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getSavingsPercentage = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: index < Math.floor(rating) ? '#FFD700' : '#E0E0E0',
          fontSize: '16px'
        }}
      />
    ));
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300 * 2; // Scroll 2 cards at a time (300px per card including gap)
    
    if (container) {
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{
      py: 8, 
      background: `
        linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%),
        radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 40%)
      `,
      backgroundSize: 'cover, 800px 800px, 600px 600px',
      backgroundPosition: 'center, top left, bottom right',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(255, 107, 53, 0.02) 100px,
            rgba(255, 107, 53, 0.02) 102px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(255, 215, 0, 0.02) 100px,
            rgba(255, 215, 0, 0.02) 102px
          )
        `,
        zIndex: 1
      }
    }}>
      {/* Decorative Spice Elements */}
      <Box sx={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF6B35, #FFD700)',
        opacity: 0.3,
        animation: 'float 8s ease-in-out infinite',
        zIndex: 1,
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(180deg)' }
        }
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #8B4513, #FF6B35)',
        opacity: 0.4,
        animation: 'float 6s ease-in-out infinite reverse',
        zIndex: 1
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{textAlign: 'center', mb: 5}}>
          <Typography variant="h2" sx={{
            color: '#FF6B35',
            fontWeight: 'bold',
            fontSize: {xs: '2.2rem', md: '3rem'},
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            mb: 3
          }}>
            👑 Our Premium Products
          </Typography>
        </Box>

        {/* Products Container with Side Navigation */}
        <Box sx={{ position: 'relative' }}>
          {/* Left Arrow */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              color: 'rgba(255, 107, 53, 0.6)',
              width: 40,
              height: 40,
              opacity: 0.4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#FF6B35',
                opacity: 1,
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
              },
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              color: 'rgba(255, 107, 53, 0.6)',
              width: 40,
              height: 40,
              opacity: 0.4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#FF6B35',
                opacity: 1,
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
              },
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Horizontal Scrolling Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 2.5,
              overflowX: 'auto',
              overflowY: 'hidden',
              paddingBottom: 2,
              paddingTop: 2,
              paddingX: 1,
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none'
            }}
          >
          {products.map((item) => (
            <Box key={item.id} sx={{ width: '280px', flexShrink: 0 }}>
              <Paper elevation={0} sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 50%, #f8f9fa 100%)',
                border: '2px solid rgba(255, 107, 53, 0.08)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '280px',
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 25px 50px rgba(255, 107, 53, 0.15), 0 0 40px rgba(255, 107, 53, 0.08)',
                  border: '2px solid rgba(255, 107, 53, 0.2)',
                  '& .product-image': {
                    transform: 'scale(1.05)'
                  },
                  '& .product-badge': {
                    transform: 'scale(1.1)'
                  }
                }
              }}>
                {item.isPopular && (
                  <Chip
                    icon={<StarIcon sx={{ fontSize: 14, color: 'white' }} />}
                    label="Popular"
                    className="product-badge"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '11px',
                      zIndex: 3,
                      boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                      borderRadius: '12px',
                      height: '28px',
                      transition: 'all 0.3s ease',
                      '& .MuiChip-label': {
                        px: 1
                      }
                    }}
                  />
                )}
                
                <Chip
                  icon={<LocalOfferIcon sx={{ fontSize: 14 }} />}
                  label={`${getSavingsPercentage(item.originalPrice, item.price)}% OFF`}
                  className="product-badge"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '11px',
                    zIndex: 3,
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    borderRadius: '12px',
                    height: '28px',
                    transition: 'all 0.3s ease',
                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />

                <Box sx={{
                  height: '160px',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  className: 'product-image',
                  transition: 'transform 0.4s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)'
                  }
                }}>
                  <Button
                    onClick={() => addToWishlist(item)}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      minWidth: 'auto',
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: wishList.find(w => w.id === item.id) ? '#FF6B35' : '#666',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 1)',
                        transform: 'scale(1.15)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.25)',
                        color: '#FF6B35'
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 20 }} />
                  </Button>
                </Box>
                
                <Box sx={{p: 3}}>
                  <Typography variant="h6" sx={{
                    fontWeight: '700',
                    mb: 0.8,
                    color: '#1a1a1a',
                    fontSize: '1.1rem',
                    lineHeight: 1.3,
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                    letterSpacing: '0.1px',
                    maxWidth: '100%'
                  }}>
                    {item.name}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{
                    color: '#8B4513',
                    mb: 1.5,
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    lineHeight: 1.2,
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                    opacity: 0.9,
                    maxWidth: '100%'
                  }}>
                    {item.englishName}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {renderStars(item.rating)}
                      <Typography variant="caption" sx={{ 
                        fontWeight: '700', 
                        color: '#1a1a1a', 
                        fontSize: '0.75rem', 
                        ml: 0.8,
                        opacity: 0.9
                      }}>
                        {item.rating}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.weight}
                      size="small"
                      sx={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        color: '#555',
                        fontSize: '11px',
                        fontWeight: '600',
                        height: '24px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" sx={{
                    color: '#666',
                    mb: 2.5,
                    lineHeight: 1.5,
                    fontSize: '0.85rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    height: '2.55em', // Fixed height for 2 lines
                    opacity: 0.85,
                    fontWeight: '400',
                    maxWidth: '100%',
                    width: '100%'
                  }}>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                    <Typography variant="h6" sx={{
                      color: '#FF6B35',
                      fontWeight: '800',
                      fontSize: '1.2rem',
                      textShadow: '0 1px 2px rgba(255, 107, 53, 0.1)'
                    }}>
                      ₹{item.price}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: '#999',
                      textDecoration: 'line-through',
                      fontSize: '0.9rem',
                      opacity: 0.7,
                      fontWeight: '500'
                    }}>
                      ₹{item.originalPrice}
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    fullWidth
                    startIcon={<ShoppingCartIcon sx={{ fontSize: '18px' }} />}
                    onClick={() => addToCart(item)}
                    sx={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                      color: 'white',
                      padding: '12px 16px',
                      borderRadius: '16px',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                      border: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s'
                      },
                      '&:hover': {
                        background: 'linear-gradient(135deg, #F7931E 0%, #FF6B35 100%)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 35px rgba(255, 107, 53, 0.4)',
                        '&::before': {
                          left: '100%'
                        }
                      },
                      '&:active': {
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Paper>
            </Box>
          ))}
          </Box>
        </Box>

        <Box sx={{
          mt: 8,
          textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)',
          borderRadius: '30px',
          p: 5,
          boxShadow: '0 20px 50px rgba(0,0,0,0.1), inset 0 1px 3px rgba(255,255,255,0.5)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.3)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: `
              radial-gradient(circle, rgba(255, 107, 53, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'rotate 30s linear infinite',
            zIndex: 1,
            '@keyframes rotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            }
          }
        }}>
          <Typography variant="h4" sx={{
            color: '#8B4513',
            fontWeight: 'bold',
            mb: 3,
            position: 'relative',
            zIndex: 2,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            Why Choose Spice Kings?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2, position: 'relative', zIndex: 2 }}>
            {[
              { icon: '🌿', title: '100% Natural', desc: 'No artificial preservatives or colors' },
              { icon: '👵', title: 'Traditional Recipes', desc: 'Passed down through generations' },
              { icon: '🥇', title: 'Premium Quality', desc: 'Hand-picked ingredients only' },
              { icon: '📦', title: 'Fresh Delivery', desc: 'Made to order, delivered fresh' }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  borderRadius: '15px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.7), rgba(248,249,250,0.5))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Typography variant="h2" sx={{ mb: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Products;
