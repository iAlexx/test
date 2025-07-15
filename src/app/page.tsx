'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';

const products = [
  {
    id: 1,
    name: 'قميص كاجوال أنيق',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
    category: 'قمصان'
  },
  {
    id: 2,
    name: 'بنطلون جينز عصري',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    category: 'بناطيل'
  },
  {
    id: 3,
    name: 'جاكيت جلد فاخر',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    category: 'جاكيتات'
  },
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="main">
      <HeroSection />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              color: 'primary.main',
              textAlign: 'right'
            }}
          >
            منتجاتنا المميزة
          </Typography>
        </motion.div>

        <FeaturedProducts />

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}