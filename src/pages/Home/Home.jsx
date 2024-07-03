import Hero from "../../components/Hero/Hero";
import logo from "/Goblino_2_transperant.png";
import { Grid } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Layout>
      <Grid mt={22} container>
        <Grid md={6} item>
          <Hero />
        </Grid>

        <Grid md={6} item>
          <Box component="img" width={600} height={300} src={logo} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
