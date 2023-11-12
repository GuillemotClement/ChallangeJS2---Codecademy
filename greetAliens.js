const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
  for(let i = 0; i < arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
}

console.log(greetAliens(aliens));