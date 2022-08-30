/* const first = ["ed", "ricardo"];
const second = ["mestre", "manu", "vicky"]; */
const first = [10, 20];
const second = [30, 40, 50];

//const newfirst = first.concat(second);

const newfirst = first.concat(second).map((v) => v * 10).filter((v) => v < 50 );
//const newfirst = first.concat(second).filter((v) => v.startsWith("m") );

console.log(newfirst);