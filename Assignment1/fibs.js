function fibs(number) {
  if(number < 0) return 'Invalid number (positive number required)'
  if(number === 0) return [];
  if(number === 1) return [0];

  let first = 0;
  let second = 1;
  let temp;

  const array = [0, 1];

  for(let i = 2; i < number; i++){
    temp = first + second;
    first = second;
    second = temp;
    
    array.push(second);
  }

  return array
}

console.log(fibs(-5)); 
console.log(fibs(1)); 
console.log(fibs(2)); 
console.log(fibs(3)); 
console.log(fibs(6)); 
console.log(fibs(8)); 
