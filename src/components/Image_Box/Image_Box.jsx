import Layout from "../Layout/Layout";
import Box from "@mui/material"
import '../../../src/App.css'

const Image_Box = () => {
  return (
    <Layout>
      <Box className="hero">
        <Box className="hero-img">
          <Box
            component="img"
            src='../../../public/Goblino_2_transperant.svg'
            alt="description"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "600px",
              
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Image_Box;