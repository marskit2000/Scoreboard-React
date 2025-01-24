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
  // const [players, setPlayers] = React.useState<string[]>([]);
  // //Initialise Player Names
  // React.useEffect(() => {
  //   let tempArr: string[] = [];
  //   for (let i = 0; i < props.noOfPlayers; i++) {
  //     tempArr.push(`Player ${i + 1}`);
  //   }
  //   setPlayers(tempArr);
  // }, []);

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg uppercase">Players</CardTitle>
        <CardDescription>Please enter your name</CardDescription>
        <Label className="font-bold" htmlFor="no-of-player">No. of Players</Label>
        <Input type="number" defaultValue={props.noOfPlayers} id="no-of-player" className="text-center w-24 mx-auto" onChange={ e => {
          props.changePlayersNumber(e.target.value)
        }}/>
      </CardHeader>
      <CardContent>
        {props.players.map((player: string, i: number) => {
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
                  props.changePlayersName(e.target.value, i);
                  console.log(props.players);
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
