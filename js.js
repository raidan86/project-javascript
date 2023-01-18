for (let i = 1; i <= 135; i++) {
    console.log(i);
  }
  
 for (let i = 1; i <= 135; i++) {
    if (i % 2 !== 0) console.log(i);
  }
  
  



let sum = 0;
for (let i = 1; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i} Sum: ${sum}`);
}

let z = [1,4,2,12];
for (let i = 0; i < z.length; i++) {
  console.log(z[i]);
}


let X = [2,-3,-1];
let max = X[0];
for (let i = 1; i < X.length; i++) {
  if (X[i] > max) max = X[i];
}
console.log(max);

