/*
Title: Array - DS

Description: Reverse an array of integers

Examples: 
A = [1, 2, 3]
return [3, 2, 1]
*/

const reverseArray = (a: number[]): number[] => {
  let res: number[] = [];
  for (let index = a.length - 1; index >= 0; index--) {
    res = [...res, a[index]];
  }
  return res;
};
