/*
Title: Plus Minus

Description: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Examples: arr = [1, 1, 0, -1, -1]

There are n=5 elements, two positive, two negative and one zero. 
Their ratios are 2/5 = 0.400000 , 2/5=0.400000, 1/5=0.200000 and . 

Results are printed as:
0.400000
0.400000
0.200000,

*/
const plusMinus = (arr: number[]): void => {
  const positive = arr.filter(n => n > 0).length;
  const negative = arr.filter(n => n < 0).length;
  const zero = arr.filter(n => n === 0).length;

  console.log(`${(positive / arr.length).toFixed(6)} \n ${(
    negative / arr.length
  ).toFixed(6)} \n ${(zero / arr.length).toFixed(6)}
  `);
};
