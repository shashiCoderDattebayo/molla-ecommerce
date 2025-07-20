import React, { useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Avatar, Rating, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "ఎలాన్ మస్క్",
      englishName: "Elon Musk",
      location: "టెక్సాస్",
      rating: 5,
      text: "These pickles are out of this world! 🚀 Tesla factory canteen needs this! Spice Kings to Mars! 👽",
      englishText: "These pickles are out of this world! 🚀 Tesla factory canteen needs this! Spice Kings to Mars! 👽",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped%29.jpg",
      verified: true,
      orderCount: 50
    },
    {
      id: 2,
      name: "నరేంద్ర మోదీ",
      englishName: "Narendra Modi",
      location: "న్యూఢిల్లీ",
      rating: 5,
      text: "Make in India, Taste in India! 🇮🇳 These pickles represent our rich culinary heritage. Spice Kings - Aatmanirbhar Bharat! 🫡",
      englishText: "Make in India, Taste in India! 🇮🇳 These pickles represent our rich culinary heritage. Spice Kings - Aatmanirbhar Bharat! 🫡",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png",
      verified: true,
      orderCount: 100
    },
    {
      id: 3,
      name: "నందమూరి బాలకృష్ణ",
      englishName: "Nandamuri Balakrishna",
      location: "హైదరాబాద్",
      rating: 5,
      text: "ఈ పపాయి పచ్చడి మా మాన్షన్ హౌస్ లో ఉండే పచ్చడి కంటే బాగుంది! 🏰 Spice Kings - నా ఇష్టమైన బ్రాండ్! 👑",
      englishText: "This papaya pickle is better than the one in our mansion house! 🏰 Spice Kings - my favorite brand! 👑",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nandamuri_Balakrishna_2019.jpg/800px-Nandamuri_Balakrishna_2019.jpg",
      verified: true,
      orderCount: 75
    },
    {
      id: 4,
      name: "అక్షయ్ రెడ్డి",
      englishName: "Akshay Reddy",
      location: "మహబూబ్‌నగర్",
      rating: 5,
      text: "అయ్యో! ఈ పచ్చడులు తిన్న తర్వాత నా ముఖం ఎలా ఉందో చూడండి! 😂 మా అమ్మ కూడా ఇంత spicy చేయలేదు!",
      englishText: "OMG! Look at my face after eating these pickles! 😂 Even my mom doesn't make them this spicy!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 12
    },
    {
      id: 5,
      name: "మణితేజ వుప్పుల",
      englishName: "Maniteja Vuppula",
      location: "కొడాడ",
      rating: 5,
      text: "నేను ఇంతకు ముందు ఎప్పుడూ ఏమీ order చేయలేదు. ఇప్పుడు ఇంట్లో అందరూ నన్ను 'Pickle Queen' అంటారు! 👑",
      englishText: "I never ordered anything before. Now everyone at home calls me 'Pickle Queen'! 👑",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f9?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 8
    },
    {
      id: 6,
      name: "నియతి అల్లు",
      englishName: "Niyathi Allu",
      location: "సాన్ ఫ్రాన్సిస్కో",
      rating: 5,
      text: "USA లో ఉన్నా ఇంత fresh pickles వస్తాయా? మా roommates అందరూ jealous అవుతున్నారు! 😎",
      englishText: "Even in USA, I get such fresh pickles? All my roommates are getting jealous! 😎",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 15
    },
    {
      id: 7,
      name: "అక్రమ్ ఖాన్",
      englishName: "Akram Khan",
      location: "బెంగళూరు",
      rating: 5,
      text: "Social media లో viral అయింది కాబట్టి try చేశాను. ఇప్పుడు నేను viral అవుతున్నాను! 😂",
      englishText: "Tried because it went viral on social media. Now I'm going viral! 😂",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 6
    },
    {
      id: 8,
      name: "అన్వేష్",
      englishName: "Anvesh",
      location: "హైదరాబాద్",
      rating: 5,
      text: "Hyderabad లో ఉన్నా ఇంత spicy pickles తినలేదు! ఇప్పుడు నా taste buds ఎలా ఉన్నాయో చూడండి! 🔥",
      englishText: "Even in Hyderabad, I never tasted such spicy pickles! Look at my taste buds now! 🔥",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 20
    },
    {
      id: 9,
      name: "సతీష్ గొల్ల",
      englishName: "Sathish Golla",
      location: "బెంగళూరు",
      rating: 5,
      text: "Bangalore లో ఉన్నా ఇంత fresh delivery! మా office colleagues అందరూ నన్ను follow చేస్తున్నారు! 😄",
      englishText: "Even in Bangalore, such fresh delivery! All my office colleagues are following me now! 😄",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      orderCount: 4
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 344 * 2; // Scroll 2 cards at a time (344px per card including gap)
    
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
      background: 'linear-gradient(135deg, #F5F5F0 0%, #FFF8E1 50%, #F5F5F0 100%)',
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
          radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
            fontWeight: '800',
            color: '#3E2723',
            fontSize: {xs: '1.8rem', md: '2.2rem'},
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}>
            👑 Royal Testimonials
          </Typography>
        </Box>

        {/* Testimonials Container with Side Navigation */}
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
              color: 'rgba(255, 215, 0, 0.6)',
              width: 40,
              height: 40,
              opacity: 0.4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#FFD700',
                opacity: 1,
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
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
              color: 'rgba(255, 215, 0, 0.6)',
              width: 40,
              height: 40,
              opacity: 0.4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#FFD700',
                opacity: 1,
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
              },
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Testimonials Scroll Container */}
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
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              sx={{
                minWidth: 320,
                maxWidth: 320,
                flexShrink: 0,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 215, 0, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(255, 107, 53, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'visible',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 4px 12px rgba(255, 107, 53, 0.3)',
                  borderColor: 'rgba(255, 215, 0, 0.5)'
                }
              }}
            >
              {/* Verified Badge */}
              {testimonial.verified && (
                <Box sx={{
                  position: 'absolute',
                  top: -4,
                  right: 16,
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)'
                }}>
                  ✓ Verified
                </Box>
              )}

              <CardContent sx={{ p: 3 }}>
                {/* Customer Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={testimonial.image}
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 2,
                      border: '3px solid rgba(255, 215, 0, 0.5)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{
                      fontWeight: 'bold',
                      color: '#3E2723',
                      fontSize: '1rem',
                      lineHeight: 1.2
                    }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{
                      color: '#8B4513',
                      fontSize: '0.9rem'
                    }}>
                      {testimonial.englishName}
                    </Typography>
                    <Typography variant="caption" sx={{
                      display: 'block',
                      color: '#666',
                      fontSize: '0.8rem'
                    }}>
                      📍 {testimonial.location} • {testimonial.orderCount} orders
                    </Typography>
                  </Box>
                </Box>

                {/* Rating */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: '#FFD700'
                      }
                    }}
                  />
                  <Typography variant="caption" sx={{ ml: 1, color: '#666' }}>
                    ({testimonial.rating}.0)
                  </Typography>
                </Box>

                {/* Telugu Review */}
                <Typography variant="body2" sx={{
                  color: '#3E2723',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  mb: 2,
                  fontSize: '0.95rem'
                }}>
                  "{testimonial.text}"
                </Typography>

                {/* English Translation */}
                <Typography variant="caption" sx={{
                  color: '#8B4513',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  display: 'block',
                  background: 'rgba(255, 215, 0, 0.1)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  borderLeft: '3px solid #FFD700'
                }}>
                  English: "{testimonial.englishText}"
                </Typography>
              </CardContent>
            </Card>
          ))}
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" sx={{
            color: '#FF6B35',
            fontWeight: 'bold',
            mb: 2
          }}>
            🔥 Join 10,000+ Happy Customers!
          </Typography>
          <Typography variant="body2" sx={{
            color: '#8B4513',
            fontSize: '1rem'
          }}>
            Experience the royal taste that's taking social media by storm! 👑🌶️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 