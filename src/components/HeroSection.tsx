'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    title: 'مجموعة خريف 2023',
    subtitle: 'اكتشف أحدث صيحات الموضة',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    title: 'تخفيضات حصرية',
    subtitle: 'خصومات تصل إلى 50%',
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
    title: 'تشكيلة جديدة',
    subtitle: 'ملابس عصرية بتصاميم فريدة',
  },
];

export default function HeroSection() {
  return (
    <Box sx={{ height: '80vh', position: 'relative' }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ height: '100%' }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Container maxWidth="lg">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 2,
                        textAlign: 'right',
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        mb: 4,
                        textAlign: 'right',
                      }}
                    >
                      {slide.subtitle}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'grey.100',
                        },
                      }}
                    >
                      تسوق الآن
                    </Button>
                  </motion.div>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}