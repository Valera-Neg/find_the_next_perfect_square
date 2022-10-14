function findNextSquare(sq) {
  return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);  
}
  
  console.log(findNextSquare(121)) //> 144 
  console.log(findNextSquare(625)) //> 676 
  console.log(findNextSquare(319225)) //> 320356 
  console.log(findNextSquare(15241383936)) //> 15241630849 
  console.log(findNextSquare(155)) //> -1 
  console.log(findNextSquare(342786627)) //> -1 
  console.log(findNextSquare(114 )) //> -1 