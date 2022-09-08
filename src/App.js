import { Grid } from "@mui/material";
import HeadBar from "./components/headbar/HeadBar";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/home/sliders/Sliders";
import Banners from "./components/home/banners/Banners";
import Principal from "./routes/Principal";
const App = () => {
  return (
    <Grid>
      <HeadBar />
      <Navbar />
      <Principal />
    </Grid>
  );
};

export default App;
