import { Grid } from "@mui/material";
import HeadBar from "./components/headbar/HeadBar";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/home/sliders/Sliders";
const App = () => {
  return (
    <Grid>
      <HeadBar />
      <Navbar />
      <Sliders />
    </Grid>
  );
};

export default App;
