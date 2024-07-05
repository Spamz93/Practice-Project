import Box from '@mui/material/Box'
import imageLibrary from '../../../../utils/images'
import Gallery_Card from '../Gallery_Card/Gallery_Card';

const Gallery_Pictures = () => {
    const stylesGallery = {
        galleryContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '16px',
        },
    };

    return (
        <Box sx={stylesGallery.galleryContainer}>
            {imageLibrary.map((image) => (
                <Gallery_Card key={image}
                    image={image}
                >
                </Gallery_Card>

            ))}
        </Box>
    );
}

export default Gallery_Pictures;