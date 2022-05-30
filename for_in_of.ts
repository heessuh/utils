const numbers: number[] = [10, 20, 30, 40, 50];

for (const index in numbers) {
  console.log(index); // 0, 1, 2, 3, 4
  console.log(numbers[index]); // 10, 20, 30, 40, 50
}

for (const value of numbers) {
  if (value > 20) {
    break;
  }
  console.log(value); // 10, 20
}