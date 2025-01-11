import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Playername = (props: any) => {
  const [players, setPlayers] = React.useState<string[]>([]);
  //Initialise Player Names
  React.useEffect(() => {
    let tempArr: string[] = [];
    for (let i = 0; i < props.noOfPlayers; i++) {
      tempArr.push(`Player ${i + 1}`);
    }
    setPlayers(tempArr);
  }, []);

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg uppercase">Players</CardTitle>
        <CardDescription>Please enter your name</CardDescription>
      </CardHeader>
      <CardContent>
        {players.map((player, i) => {
          return (
            <div key={i} className="flex items-center gap-2 mb-2">
              <Label className="font-bold" htmlFor={`Player ${i}`}>
                Player{i + 1}
              </Label>
              <Input
                id={`Player ${i}`}
                type="string"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPlayers((prevArr) => {
                    const result = [...prevArr];
                    result[i] = e.target.value;
                    return result;
                  });
                  console.log(players);
                }}
              />
            </div>
          );
        })}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Playername;
