import { useState } from "react";
import "./App.css";

import Scorecard from "./components/Scorecard";
import Playername from "./components/Playername";

function App() {
  const [noOfPlayers, setNoOfPlayers] = useState<number>(3);
  return (
    <>
      <Playername noOfPlayers={noOfPlayers} />
      <Scorecard noOfPlayers={noOfPlayers} />
    </>
  );
}

export default App;
