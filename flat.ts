const numbers: number[][] = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
numbers.flat(); // [10, 20, 30, 40, 50, 60, 70, 80, 90]

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]];
deepNumbers.flat(); //[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]
deepNumbers.flat(2);//[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]
deepNumbers.flat(Infinity);//[10, 20, 30, 40, 50, 60, 70, 80, 90]g

const values = [10, 20, 30, 40, 50];

values.map((v, i) => [v, i]);
values.flatMap((v, i) => [v, i]);