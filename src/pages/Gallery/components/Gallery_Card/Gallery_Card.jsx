import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import { FacebookShareButton, TwitterShareButton, RedditShareButton, FacebookIcon, TwitterIcon, RedditIcon } from 'react-share';

const Gallery_Card = ({ image }) => {
  const [open, setOpen] = useState(false);

  const cardStyles = {
    backgroundColor: '#663399',
    color: 'limegreen',
    maxWidth: 345,
    margin: '8px',
  };

  const buttonStyles = {
    color: 'limegreen',
  };

  const stylesGallery = {
    galleryItemImg: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '5px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
  };

  const handleLearnMore = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const shorterText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  const truncatedDescription = shorterText(image.description, 30);
  const shareUrl = window.location.href;

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt={image.alt}
        height="140"
        image={image.src}
        sx={stylesGallery.galleryItemImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {image.alt}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <FacebookShareButton url={shareUrl} quote={image.description}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={image.alt}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={shareUrl} title={image.alt}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <Button size="small" sx={buttonStyles} onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="dialog-title"
        PaperProps={{
          sx: {
            backgroundColor: '#4B0082', 
            color: 'white', 
          }
        }}
      >
        <DialogTitle id="dialog-title" sx={{ backgroundColor: '#4B0082', color: 'white' }}>
          {image.alt}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#4B0082', color: 'white' }}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', marginBottom: '16px' }} />
          <DialogContentText sx={{ color: 'white' }}>
            {image.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#4B0082' }}>
          <Button onClick={handleClose} sx={{ color: 'limegreen' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

Gallery_Card.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Gallery_Card;







