'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              متجر الأزياء
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              نقدم لكم أحدث صيحات الموضة والأزياء العصرية بأفضل الأسعار وأعلى جودة.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              روابط سريعة
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              من نحن
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              سياسة الخصوصية
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              الشروط والأحكام
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              سياسة الإرجاع
            </Link>
            <Link href="#" color="inherit" display="block">
              الأسئلة الشائعة
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              اتصل بنا
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ ml: 1 }} />
              <Typography variant="body2">
                عمان، الأردن
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ ml: 1 }} />
              <Typography variant="body2">
                +962 777 888 999
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ ml: 1 }} />
              <Typography variant="body2">
                info@fashion-store.com
              </Typography>
            </Box>

            <Box component="form" noValidate>
              <TextField
                fullWidth
                placeholder="اشترك في نشرتنا البريدية"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'secondary.main',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                  },
                }}
              >
                اشترك الآن
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          جميع الحقوق محفوظة © {new Date().getFullYear()} متجر الأزياء
        </Typography>
      </Container>
    </Box>
  );
}