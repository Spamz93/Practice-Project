import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}
    >
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: (theme) => theme.palette.grey[200],
          textAlign: 'center' 
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body2">
                Two People trying to become Devs
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Contact</Typography>
              <Typography variant="body2">Email: niksana9316@gmail.com</Typography>
              <Typography variant="body2">Phone: +359877839955</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Box>
                <IconButton aria-label="Facebook" href="https://facebook.com">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter" href="https://twitter.com">
                  <Twitter />
                </IconButton>
                <IconButton aria-label="LinkedIn" href="https://linkedin.com">
                  <LinkedIn />
                </IconButton>
                <IconButton aria-label="GitHub" href="https://github.com">
                  <GitHub />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
