import { Button, Typography, Stack,} from "@mui/material";
import "../../App.css";
import { useNavigate } from "react-router";


const Hero = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/achievements')
  }

  const handleWatchGameplay = () => {
    window.open('https://www.youtube.com/@niksana5/videos?view=0&sort=dd&shelf_id=0')
  }

  return (
    <div className="hero-text">
      <Typography variant="h4">Lead Guild</Typography>
      <Typography variant="h1">Looting Trainer</Typography>
      <Typography sx={{ color: "white" }} variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        expedita iste odit ex alias aut corporis natus velit perferendis
        doloremque, reiciendis nisi distinctio tempore aspernatur numquam
        provident dicta! Dicta, quod.
      </Typography>
      <Stack justifyContent="center" direction="row" p={3} gap={2}>
        <Button variant="contained" sx={{color: "lime"}} onClick={handleApplyClick}>Apply</Button>
        <Button variant="outlined" sx={{color: "limegreen"}} onClick={handleWatchGameplay}>Watch Gameplay</Button>
      </Stack>
    </div>
  );
};

export default Hero;