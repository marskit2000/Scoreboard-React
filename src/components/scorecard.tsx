import React from "react";
import Scoreboard from "./Scoreboard";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Scorecard = (props: { noOfPlayers: number }) => {
  console.log(props.noOfPlayers);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg uppercase">Scoreboard</CardTitle>
        <CardDescription>Rummikub Score Card</CardDescription>
      </CardHeader>
      <CardContent>
        <Scoreboard noOfPlayers={props.noOfPlayers} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Scorecard;
