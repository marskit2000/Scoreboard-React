import React, { LegacyRef, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

const noOFGames = 6;
// const noOfPlayers = 4;

const Scoreboard = (props: { noOfPlayers: number }) => {
  let scoretable: any = React.useRef(0);
  const [results, setResults] = React.useState(
    Array(props.noOfPlayers).fill(0)
  );
  const [payAmount, setPayAmount] = React.useState(
    Array(props.noOfPlayers).fill(0)
  );
  const [moneyPerPoint, setMoneyPerPoint] = React.useState(1);
  const [players, setPlayers] = React.useState<string[]>([]);

  //Initialise Player Names
  React.useEffect(() => {
    let tempArr: string[] = [];
    for (let i = 0; i < props.noOfPlayers; i++) {
      tempArr.push(`Player ${i + 1}`);
    }
    setPlayers(tempArr);
  }, []);

  // console.log(scoretable.current.rows[1].cells[1].childNodes[0].value)

  //calculate sum and amount

  const handleClick = () => {
    setResults(calculatePlayerTotal());
  };

  React.useEffect(
    () =>
      setPayAmount(
        findAllDifferences(results).map((pay) => pay * moneyPerPoint)
      ),
    [results, moneyPerPoint]
  );

  //reset

  const handleReset = () => {
    setResults(Array(props.noOfPlayers).fill(0));
    setPayAmount(Array(props.noOfPlayers).fill(0));

    for (let i = 1; i < scoretable.current.rows.length - 2; i++) {
      for (let j = 0; j < scoretable.current.rows[i].cells.length; j++) {
        scoretable.current.rows[i].cells[j].childNodes[0].value = 0;
      }
    }
  };

  //helper functions

  function calculatePlayerTotal() {
    let totalArray = Array(props.noOfPlayers).fill(0);

    for (let i = 1; i < scoretable.current.rows.length - 2; i++) {
      for (let j = 0; j < scoretable.current.rows[i].cells.length; j++) {
        totalArray[j] += Number(
          scoretable.current.rows[i].cells[j].childNodes[0].value
        );
      }
    }

    return totalArray;
  }

  function findDifferences(arr: number[], elePosition: number) {
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
      if (i !== elePosition) {
        sum += arr[i] - arr[elePosition];
      }
    }

    return sum;
  }

  function findAllDifferences(arr: number[]) {
    let newArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      newArr.push(findDifferences(arr, i));
    }

    return newArr;
  }

  // //generate table

  let tableArray2D: number[] = [];
  for (let i = 0; i < noOFGames; i++) {
    tableArray2D.push(i);
  }
  let colArr: number[] = [];
  for (let i = 0; i < props.noOfPlayers; i++) {
    colArr.push(i);
  }

  //Add Row

  const handleAddRow = () => {};

  //Render
  return (
    <div className="rounded-md">
      <Table ref={scoretable}>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-black rounded-md focus:bg-black focus:text-white">
            {players.map((player) => {
              return (
                <TableHead className="text-center font-bold text-white">
                  {player}
                </TableHead>
              );
            })}

            {/* {colArr.map((col) => {
              return (
                <TableHead className="text-center font-bold text-white">
                  Player {col + 1}
                </TableHead>
              );
            })} */}
            {/* 
                        <TableHead className="text-center font-bold text-white rounded-tl-md">Player 1</TableHead>
                        <TableHead className="text-center font-bold text-white">Player 2</TableHead>
                        <TableHead className="text-center font-bold text-white rounded-tr-md">Player 3</TableHead>
            */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableArray2D.map((row) => {
            return (
              <TableRow key={"Row" + row}>
                {colArr.map((col) => {
                  return (
                    <TableCell>
                      <Input
                        key={"Col" + col}
                        type="number"
                        placeholder="0"
                        defaultValue="0"
                        className="text-center border-transparent focus:border-transparent focus:ring-0"
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
          {/* <TableRow>
                        <TableCell><Input className='border-transparent focus:border-transparent focus:ring-0' type="number" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                        <TableCell><Input type="number" placeholder="0" defaultValue="0"/></TableCell>
                    </TableRow> */}
        </TableBody>
        <TableFooter className="font-bold">
          <TableRow>
            {results.map((result, i) => {
              return <TableCell key={"Result" + i}> {result} </TableCell>;
            })}
          </TableRow>
          <TableRow>
            {payAmount.map((ele, j) => {
              return <TableCell key={"Payment" + j}> ${ele} </TableCell>;
            })}
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={handleClick}>
          Calculate
        </Button>
        <Button variant="outline" onClick={handleAddRow}>
          Add Game
        </Button>
        <div className="flex">
          $
          <Input
            className="w-1/2"
            type="number"
            defaultValue={moneyPerPoint}
            step="0.5"
            onChange={(e) => {
              setMoneyPerPoint(Number(e.target.value));
            }}
          />
        </div>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default Scoreboard;
