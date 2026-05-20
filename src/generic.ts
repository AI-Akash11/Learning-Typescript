// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
type GenericArray<T> = Array<T>;

const friends : GenericArray<string> = ['Alice', 'Bob', 'Charlie'];


// const rollNumbers : number[] = [1, 2, 3, 4, 5];
const rollNumbers : GenericArray<number> = [1, 2, 3, 4, 5];

const isEligible : GenericArray<boolean> = [true, false, true];

type Coordinates<X,Y> = [X,Y];

const position1 : Coordinates<number, number> = [10, 20];

const position2 : Coordinates<string, string> = ['10', '20'];



const userList : GenericArray<{name: string, age: number}> = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 47}
];