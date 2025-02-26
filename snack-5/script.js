const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = nums.filter((number) => number % 2 === 0)

console.log(evenNums);

// bonus

const numeriPari = []

for (let i = 0; i < nums.length; i++) {
  const thisNum = nums[i];
  if (thisNum % 2 === 0) {
    numeriPari.push(thisNum)
  }
}

console.log(numeriPari);
