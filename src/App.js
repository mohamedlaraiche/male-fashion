import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HeadBar from "./components/headbar/HeadBar";
import Navbar from "./components/navbar/Navbar";
import Principal from "./routes/Principal";
const App = () => {
  const [productsData, setProdcutsData] = useState([]);
  const getPrdocutsData = async () => {
    const response = await fetch("./assets/db/products.json");
    const data = await response.json();
    console.log(data);
    setProdcutsData(data);
  };
  useEffect(() => {
    getPrdocutsData();
  }, []);
  return (
    <Grid>
      <HeadBar />
      <Navbar />
      <Principal productsData={productsData} />
    </Grid>
  );
};

export default App;
