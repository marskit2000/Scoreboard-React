import React from "react";
import "./App.css";

import Scorecard from "./components/Scorecard";
import Playername from "./components/Playername";
import AdSenseSection from "./components/AdSenseSection";

function App() {
  const [noOfPlayers, setNoOfPlayers] = React.useState<number>(3);
  const [players, setPlayers] = React.useState<string[]>([]);

  //Initialise Player Names
  React.useEffect(() => {
    let tempArr: string[] = [];
    for (let i = 0; i < noOfPlayers; i++) {
      tempArr.push(`Player ${i + 1}`);
    }
    setPlayers(tempArr);
  }, []);

  const changePlayersName = (newName: string, index: number) => {
    setPlayers((prevArr) => {
      const result = [...prevArr];
      result[index] = newName;
      return result;
    });
    console.log(players);
  };

  return (
    <>
      {/* Google AdSense Section */}
      <AdSenseSection />
      <Playername
        noOfPlayers={noOfPlayers}
        changePlayersName={changePlayersName}
        players={players}
      />
      <Scorecard noOfPlayers={noOfPlayers} players={players} />
    </>
  );
}

export default App;
