function fibsRec(number) {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    return [...fibsRec(number - 1), fibsRec(number - 1)[number - 2] + fibsRec(number - 1)[number - 3]];
  }
}


console.log(fibsRec(-3)); 
console.log(fibsRec(1)); 
console.log(fibsRec(2));
console.log(fibsRec(3)); 
console.log(fibsRec(6)); 
console.log(fibsRec(8)); 
