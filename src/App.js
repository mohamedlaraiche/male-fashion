import { Grid } from "@mui/material";
import HeadBar from "./components/headbar/HeadBar";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/home/sliders/Sliders";
import Banners from "./components/home/banners/Banners";
const App = () => {
  return (
    <Grid>
      <HeadBar />
      <Navbar />
      <Sliders />
      <Banners />
    </Grid>
  );
};

export default App;
