let array1 = [16, 14, 0];

function findDifferences(arr, elePosition){
  let sum = 0

  for(let i=0; i<arr.length; i++){
    if(i !== elePosition){
      sum += arr[i] - arr[elePosition]
    }
  }

  return sum
}

export default function findAllDifferences(arr){
  let newArr = []

  for(let i=0; i<arr.length; i++){
    newArr.push(findDifferences(arr, i))
  }

  return newArr
}

console.log(findAllDifferences(array1))
