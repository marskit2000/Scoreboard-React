import React, { LegacyRef } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Input } from "@/components/ui/input"

import { Button } from '@/components/ui/button'



const scoreboard = () => {

    let scoretable: any = React.useRef();
    const [results, setResults] = React.useState(Array(3).fill(0))
    const [payAmount, setPayAmount] = React.useState(Array(3).fill(0))
    
    // React.useEffect(
    //     ()=>console.log(scoretable.current.rows[1].cells[1].childNodes[0].value) ,
    // ) 

    // console.log(scoretable.current.rows[1].cells[1].childNodes[0].value) 

    //calculate sum and amount

    const handleClick = () => {
        setResults(calculatePlayerTotal())
    }

    React.useEffect(() => setPayAmount(findAllDifferences(results)), [results])

    //reset

    const handleReset = () => {
        setResults(Array(3).fill(0))
        setPayAmount(Array(3).fill(0))

        for(let i=1; i<(scoretable.current.rows.length-2); i++) {
            for(let j=0; j<scoretable.current.rows[i].cells.length; j++){
                scoretable.current.rows[i].cells[j].childNodes[0].value = 0
            }
          }
    }

    //helper functions

    function calculatePlayerTotal() {
        let totalArray = Array(3).fill(0)
        
      
        for(let i=1; i<(scoretable.current.rows.length-2); i++) {
          for(let j=0; j<scoretable.current.rows[i].cells.length; j++){
            totalArray[j] += Number(scoretable.current.rows[i].cells[j].childNodes[0].value)
            
          }
        }
      
        return totalArray
    }

    function findDifferences(arr: number[], elePosition: number){
        let sum: number = 0
      
        for(let i=0; i<arr.length; i++){
          if(i !== elePosition){
            sum += arr[i] - arr[elePosition]
          }
        }
      
        return sum
    }
      
    function findAllDifferences(arr: number[]){
        let newArr:number[] = []
      
        for(let i=0; i<arr.length; i++){
          newArr.push(findDifferences(arr, i))
        }
      
        return newArr
    }

  


    return (
        <div className="rounded-md">
            <Table ref={scoretable}>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow className="bg-black rounded-md focus:bg-black focus:text-white">
                        <TableHead className="text-center font-bold text-white rounded-tl-md">Player 1</TableHead>
                        <TableHead className="text-center font-bold text-white">Player 2</TableHead>
                        <TableHead className="text-center font-bold text-white rounded-tr-md">Player 3</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
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
                    </TableRow>
                </TableBody>
                <TableFooter className='font-bold'>
                    <TableRow>
                        { results.map( (result, i) => {
                            return <TableCell key={i}> {result} </TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        { payAmount.map( (ele, j) => {
                            return <TableCell key={j}> ${ele} </TableCell>
                        })}
                    </TableRow>
                </TableFooter>
            </Table>
            <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handleClick}>Calculate</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
    )
}

export default scoreboard
