import React from "react";
import "./App.css";

import Scorecard from "./components/Scorecard";
import Playername from "./components/Playername";

function App() {
  const [noOfPlayers, setNoOfPlayers] = React.useState<number>(5);
  const [players, setPlayers] = React.useState<string[]>([]);

  //Initialise Player Names
  React.useEffect(() => {
    let tempArr: string[] = [];
    for (let i = 0; i < noOfPlayers; i++) {
      tempArr.push(`Player ${i + 1}`);
    }
    setPlayers(tempArr);
  }, [noOfPlayers]);

  const changePlayersName = (newName: string, index: number) => {
    setPlayers((prevArr) => {
      const result = [...prevArr];
      result[index] = newName;
      return result;
    });
    console.log(players);
  };

  const changePlayersNumber = (num: number) => {
    setNoOfPlayers(num);
  };

  return (
    <>
      <Playername
        noOfPlayers={noOfPlayers}
        changePlayersName={changePlayersName}
        changePlayersNumber={changePlayersNumber}
        players={players}
      />
      <Scorecard noOfPlayers={noOfPlayers} players={players} />
    </>
  );
}

export default App;
