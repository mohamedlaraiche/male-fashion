import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HeadBar from "./components/headbar/HeadBar";
import Navbar from "./components/navbar/Navbar";
import Principal from "./routes/Principal";
const App = () => {
  const [empty] = useState(false);

  const [BestData, setBestData] = useState([]);
  const [NewData, setNewData] = useState([]);
  const [HotData, setHotData] = useState([]);
  const getBestData = async () => {
    const response = await fetch("./db/Best.json");
    const data = await response.json();
    console.log(data);
    setBestData(data);
  };
  const getNewData = async () => {
    const response = await fetch("./db/New.json");
    const data = await response.json();
    console.log(data);
    setNewData(data);
  };
  const getHotData = async () => {
    const response = await fetch("./db/Hot.json");
    const data = await response.json();
    console.log(data);
    setHotData(data);
  };
  useEffect(() => {
    getBestData();
    getNewData();
    getHotData();
  }, []);
  return (
    <Grid>
      <HeadBar />
      <Navbar empty={empty} />
      <Principal
        empty={empty}
        BestData={BestData}
        NewData={NewData}
        HotData={HotData}
      />
    </Grid>
  );
};

export default App;
