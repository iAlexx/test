'use client';

import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featuredCategories = [
  {
    title: 'ملابس رجالية',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
    items: '250+ قطعة',
  },
  {
    title: 'ملابس نسائية',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
    items: '300+ قطعة',
  },
  {
    title: 'إكسسوارات',
    image: 'https://images.unsplash.com/photo-1611923134239-b9be5021f6ff',
    items: '100+ قطعة',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ my: 8 }}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Grid container spacing={4}>
          {featuredCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={category.image}
                    alt={category.title}
                    className="featured-product-image"
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'right' }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.items}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}