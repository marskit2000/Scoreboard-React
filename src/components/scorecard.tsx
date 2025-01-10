import React from 'react'
import Scoreboard from './scoreboard'
import { Button } from '@/components/ui/button'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const scorecard = () => {

  return (
    <Card>
        <CardHeader>
            <CardTitle>Scoreboard</CardTitle>
            <CardDescription>Rummikub Score Card</CardDescription>
        </CardHeader>
        <CardContent>
            <Scoreboard/>
        </CardContent>
        <CardFooter>
            
        </CardFooter>
    </Card>
  )
}

export default scorecard