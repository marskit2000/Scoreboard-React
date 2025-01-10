function findDifferences(arr: Array<number> | any[], elePosition: number){
    let sum = 0
  
    for(let i=0; i<arr.length; i++){
      if(i !== elePosition){
        sum += arr[i] - arr[elePosition]
      }
    }
  
    return sum
}
  
export function findAllDifferences(arr: Array<number> | any[]){
    let newArr = []

    for(let i=0; i<arr.length; i++){
        newArr.push(findDifferences(arr, i))
    }

    return newArr
}

// export default function calculatePlayerTotal(playerNum: number, gametable: HTMLTableElement) {
//     let totalArray = Array(playerNum).fill(0)
  
//     for(let i=1; i<(gametable.rows.length); i++) {
//       for(let j=1; j<gametable.rows[i].cells.length; j++){
//         let score: HTMLInputElement = gametable.rows[i].cells[j].childNodes[0]
//         totalArray[j-1] += Number(score.value)
//       }
//     }
//     console.log(totalArray);
  
//     return totalArray
//   }