'use client';

import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Box,
  Rating,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [rating, setRating] = useState<number | null>(4);

  const handleAddToCart = () => {
    setShowSnackbar(true);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="product-card"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
          }}
        >
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              color: isFavorite ? 'error.main' : 'grey.500',
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>

        <CardContent sx={{ flexGrow: 1, textAlign: 'right' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            sx={{ fontWeight: 'bold' }}
          >
            {product.name}
          </Typography>
          
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {product.category}
          </Typography>

          <Rating
            name={`rating-${product.id}`}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ mb: 1 }}
          />

          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            {product.price.toFixed(2)} د.أ
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', p: 2 }}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
            fullWidth
            sx={{
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            أضف إلى السلة
          </Button>
        </CardActions>
      </Card>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message="تمت إضافة المنتج إلى السلة"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </motion.div>
  );
}