class ArrayOfAnyting<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnyting<string>(["a", "b", "c"]);

// Example of generics with fnctions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(["a", "b", "c"]);

//Generic Constraints
class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("Iam a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new House()]);
