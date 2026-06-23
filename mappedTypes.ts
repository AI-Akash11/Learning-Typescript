const arrayOfNum : number[] = [1, 2, 3, 4, 5];

const arrayOfStr : string[] = ["1", "2", "3", "4", "5"];

const arrayOfStringUsingMap : string [] = arrayOfNum.map(num => num.toString());

console.log(arrayOfStringUsingMap);


const user = {
    id: 123
}

type AreaOfNum = {
    height: number;
    width: number;
}

type Height = AreaOfNum["height"];

// type AreaOfStr = {
//     height: string;
//     width: string;
// }

// type AreaOfStr = {
//     [key in "height" | "width"]: string;
// }

// type AreaOfStr = {
//     [key in keyof AreaOfNum]: string;
// }

type Area <T> = {
    [key in keyof T]: T[key];
}

const area1 : Area< { height: string; width: number ; depth: boolean }> = {
 height: "10",
 width: 20,
 depth: true
}